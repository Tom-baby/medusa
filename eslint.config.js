module.exports = {
    root: true,
    // parser: 'babel-eslint',
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module',
    },
    settings: {
      'import/external-module-folders': [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    },
    extends: ['airbnb-base'],
    env: {
      browser: true,
    },
  }