module.exports = {
  // processors: ['stylelint-processor-html'], // 为了处理 vue 中的css
  extends: ['stylelint-config-standard'],
  rules: {
    // 规则制定可以参考 https://stylelint.io/user-guide/rules/
    'selector-list-comma-newline-after': null, // 多个选择器用逗号隔开的时候要求换行，这里禁用，可以在同行定义多个选择器
    'no-empty-source': null, // css代码是空的表示是empty，这里禁用，避免有的没有写css代码报错
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin'],
      },
    ],
  },
};
