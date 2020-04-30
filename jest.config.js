module.exports = {
  transform: {
    "^.+\\.svelte$": "svelte-jester",
    "^.+\\.js$": "babel-jest"
  },
  moduleFileExtensions: ["js", "svelte"],
  testPathIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: ["node_modules"],
  verbose: true,
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
