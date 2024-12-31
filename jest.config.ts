import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/js-with-ts", // Use ts-jest with JS and TypeScript
  testEnvironment: "jsdom", // Simulates a browser environment
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // For TypeScript files
    "^.+\\.(js|jsx)$": "babel-jest", // For JavaScript files
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Optional: For React Testing Library
};

export default config;
