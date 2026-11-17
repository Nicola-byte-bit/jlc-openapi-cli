import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  CONFIG_FILE_NAME,
  DEFAULT_ENDPOINT,
  loadConfig,
  writeConfig,
  type Config,
} from "../src/config";
import { CliError } from "../src/output";

function tempDir(): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), "jlc-cli-test-"));
}

function cleanup(dir: string): void {
  fs.rmSync(dir, { recursive: true, force: true });
}

test("当前目录优先于用户主目录", () => {
  const cwd = tempDir();
  const home = tempDir();
  try {
    fs.writeFileSync(
      path.join(cwd, CONFIG_FILE_NAME),
      JSON.stringify({ appId: "cwd-app", ak: "cwd-ak", sk: "cwd-sk", endpoint: "https://cwd.example.com" }),
    );
    fs.writeFileSync(
      path.join(home, CONFIG_FILE_NAME),
      JSON.stringify({ appId: "home-app", ak: "home-ak", sk: "home-sk", endpoint: "https://home.example.com" }),
    );

    const config = loadConfig({ cwd, homeDir: home, env: {} });
    assert.equal(config.appId, "cwd-app");
    assert.equal(config.endpoint, "https://cwd.example.com");
  } finally {
    cleanup(cwd);
    cleanup(home);
  }
});

test("回退到用户主目录", () => {
  const cwd = tempDir();
  const home = tempDir();
  try {
    fs.writeFileSync(
      path.join(home, CONFIG_FILE_NAME),
      JSON.stringify({ appId: "home-app", ak: "home-ak", sk: "home-sk" }),
    );
    const config = loadConfig({ cwd, homeDir: home, env: {} });
    assert.equal(config.appId, "home-app");
    assert.equal(config.endpoint, DEFAULT_ENDPOINT);
  } finally {
    cleanup(cwd);
    cleanup(home);
  }
});

test("环境变量按字段覆盖", () => {
  const cwd = tempDir();
  try {
    fs.writeFileSync(
      path.join(cwd, CONFIG_FILE_NAME),
      JSON.stringify({ appId: "file-app", ak: "file-ak", sk: "file-sk", endpoint: "https://file.example.com" }),
    );
    const config = loadConfig({
      cwd,
      homeDir: cwd,
      env: {
        JLC_OPENAPI_APP_ID: "env-app",
        JLC_OPENAPI_ENDPOINT: "https://env.example.com",
      },
    });
    assert.equal(config.appId, "env-app");
    assert.equal(config.ak, "file-ak");
    assert.equal(config.endpoint, "https://env.example.com");
  } finally {
    cleanup(cwd);
  }
});

test("--config 指定的文件必须存在", () => {
  const cwd = tempDir();
  try {
    assert.throws(
      () => loadConfig({ configPath: path.join(cwd, "missing.json"), cwd, homeDir: cwd, env: {} }),
      (error: unknown) => error instanceof CliError && error.type === "config",
    );
  } finally {
    cleanup(cwd);
  }
});

test("配置损坏时报错，不回退", () => {
  const cwd = tempDir();
  try {
    fs.writeFileSync(path.join(cwd, CONFIG_FILE_NAME), "{not json");
    assert.throws(
      () => loadConfig({ cwd, homeDir: cwd, env: {} }),
      /不是合法的 JSON/,
    );
  } finally {
    cleanup(cwd);
  }
});

test("缺失字段一次性报出", () => {
  const cwd = tempDir();
  try {
    fs.writeFileSync(path.join(cwd, CONFIG_FILE_NAME), JSON.stringify({ appId: "app" }));
    assert.throws(
      () => loadConfig({ cwd, homeDir: cwd, env: {} }),
      /缺少必要字段：ak, sk/,
    );
  } finally {
    cleanup(cwd);
  }
});

test("非 https endpoint 被拒绝", () => {
  const cwd = tempDir();
  try {
    fs.writeFileSync(
      path.join(cwd, CONFIG_FILE_NAME),
      JSON.stringify({ appId: "a", ak: "b", sk: "c", endpoint: "http://insecure.example.com" }),
    );
    assert.throws(() => loadConfig({ cwd, homeDir: cwd, env: {} }), /https/);
  } finally {
    cleanup(cwd);
  }
});

test("writeConfig 原子写入并回读", () => {
  const dir = tempDir();
  try {
    const target = path.join(dir, CONFIG_FILE_NAME);
    const config: Config = {
      appId: "app",
      ak: "ak",
      sk: "sk",
      endpoint: "https://open-api.jlc.com",
    };
    const written = writeConfig(config, target);
    assert.equal(written, target);
    assert.deepEqual(JSON.parse(fs.readFileSync(target, "utf8")), config);
    assert.deepEqual(fs.readdirSync(dir), [CONFIG_FILE_NAME]);

    if (process.platform !== "win32") {
      const mode = fs.statSync(target).mode & 0o777;
      assert.equal(mode, 0o600);
    }
  } finally {
    cleanup(dir);
  }
});
