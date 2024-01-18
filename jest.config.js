export default {
  preset: "ts-jest",
  coveragePathIgnorePatterns: ["test-config"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  // to obtain access to the matchers.
  setupFilesAfterEnv: ["./src/test-config/setupTests.ts"],

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [151001],
        },
      },
    ],
  },
  moduleNameMapper: {
    // if your using tsconfig.paths thers is no harm in telling jest
    "@compositions/(.*)$": "<rootDir>/src/compositions/$1",
    "@test-config/(.*)$": "<rootDir>/src/test-config/$1",
    "@components/(.*)$": "<rootDir>/src/components/$1",
    "@elements/(.*)$": "<rootDir>/src/elements/$1",
    "@services/(.*)$": "<rootDir>/src/services/$1",
    "@config/(.*)$": "<rootDir>/src/config/$1",
    "@assets/(.*)$": "<rootDir>/src/assets/$1",
    "@pages/(.*)$": "<rootDir>/src/pages/$1",
    "@state/(.*)$": "<rootDir>/src/state/$1",
    "@utils/(.*)$": "<rootDir>/src/utils/$1",
    "@hook/(.*)$": "<rootDir>/src/hook/$1",
    "@/(.*)$": "<rootDir>/src/$1",
    // mocking assests and styling
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>src/test-config/fileMock.ts",
    "^.+\\.(css|less|scss|sass)$": "<rootDir>src/test-config/styleMock.ts",

    /* mock models and services folder */
    "(assets|models|services)": "<rootDir>src/test-config/fileMock.ts",
  },
};
