module.exports =
{
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  // since im using arch, and this lib won't work with it i will run a container instead
  // preset: '@shelf/jest-mongodb',
  coveragePathIgnorePatterns: ['protocols'],
  setupFiles: ['<rootDir>/setTestEnvVars.js']
}
