/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    'mocks/(.*)': '<rootDir>/__mocks__/$1'
  },
  coverageDirectory: '<rootDir>/coverage'
}
