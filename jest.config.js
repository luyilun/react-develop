module.exports = {
    verbose: true,
    setupFiles: ['<rootDir>/src/__test__/jest.setup.js', 'jest-canvas-mock'], // 运行测试前可执行的脚本（比如注册enzyme的兼容）
    transform: {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        // '^.+\\.css$': '<rootDir>/__test__/css-transform.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mock__/fileTransformer.js'
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], // 转换时需忽略的文件
    testURL: 'http://localhost/', // 运行环境下的URl
    moduleFileExtensions: ['js', 'node'],
    moduleNameMapper: {
        '^src(.*)$': '<rootDir>/src$1',
        '\\.(css|less)$': 'identity-obj-proxy'
    }
};