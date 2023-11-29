module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json'],

    transform: {
        '^.+\\.js?$': 'babel-jest',
    },

    transformIgnorePatterns: ['/node_modules/'],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },

    testMatch: ['**/test/**/*.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],

    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
};
