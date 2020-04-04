const atImport = require('postcss-import');
const apply = require('postcss-apply');
const postcssPresetEnv = require('postcss-preset-env');
const nested = require('postcss-nested');
module.exports = {
  plugins: [
    atImport(),
    apply(),
    postcssPresetEnv({
      browsers: ['last 3 versions', 'Android >= 4.0'],
    }),
    nested({
      preserveEmpty: true,
    }),
  ],
};
