// These modules are for accessing external resources
// and shouldn't run during tests
jest.mock("fs");
jest.mock("child_process");
jest.mock("axios");
jest.mock("./utils/network");
jest.mock("./utils/files");
