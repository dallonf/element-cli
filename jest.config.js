module.exports = {
    moduleFileExtensions: ["ts", "js"],
    moduleDirectories: ["node_modules", "src"],
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    testEnvironment: "node",
    rootDir: ".",
    testRegex: "src/.*\\.(spec|test)\\.(ts)$",
    verbose: true,
    coverageReporters: ["text"],
};
