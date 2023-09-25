const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~/(.*)$": "<rootDir>/public/$1",
  },
  collectCoverageFrom: [
    "src/components/*.tsx",
    "src/features/**/*.tsx",
    "src/service/*.ts",
    "src/utils/*.ts",
    "src/app/page.tsx",
    "!src/__tests__/**/*.{ts,tsx}",
  ],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
