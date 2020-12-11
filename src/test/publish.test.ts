import { exec as execCb } from "child_process";
import * as path from "path";
import { promisify } from "util";

import { copy, mkdirp, pathExists, remove } from "fs-extra";

const exec = promisify(execCb);

it("publishes (happy path)", async () => {
    const project = path.resolve(".");
    const relativeFilename = path.relative(
        path.join(project, "src"),
        __filename
    );

    const testDirName = relativeFilename
        .replace(/\.test\.ts$/, "")
        .replace(/[.\/]/g, "_")
        .replace(/[^a-z0-9_-]/gi, "");

    const tmpDir = path.join(project, ".tmp", testDirName);
    if (await pathExists(tmpDir)) {
        await remove(tmpDir);
    }
    await mkdirp(tmpDir);

    const fixtureDir = path.join(project, "src/test/fixtures/SimpleBlock");

    await copy(fixtureDir, tmpDir);

    const elementCli = path.join(project, "bin/src/index.js");

    const command = ["node", elementCli, "publish"].join(" ");
    const output = await exec(command, {
        cwd: tmpDir,
    });

    console.log(command, output);
});
