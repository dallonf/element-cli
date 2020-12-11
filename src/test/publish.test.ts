import * as path from "path";

import { copy, mkdirp, pathExists, rmdir } from "fs-extra";

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
        await rmdir(tmpDir);
    }
    await mkdirp(tmpDir);

    const fixtureDir = path.join(project, "src/test/fixtures/SimpleBlock");

    await copy(fixtureDir, tmpDir);
});
