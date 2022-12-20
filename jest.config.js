module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': '@swc/jest',
  },
  testEnvironment: 'node',
  reporters: ['default'],
}
