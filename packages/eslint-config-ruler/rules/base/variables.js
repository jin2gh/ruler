/**
 * env 预设的环境，使用这些环境中的全局变量不会被 no-undef 报错
 * @see https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true,
  },
  rules: {
    // 强制或禁止在变量声明时进行赋值
    'init-declarations': 'off',

    // 禁止 delete 变量
    'no-delete-var': 'error',

    // 禁止创建与作用域内的变量共享名称的标签
    'no-label-var': 'error',

    // 指定不想在应用程序中使用的全局变量名称
    'no-restricted-globals': 'off',

    // 禁止变量与外层作用域存在的变量同名
    'no-shadow': 'error',

    // 禁止使用保留字命名变量
    'no-shadow-restricted-names': 'error',

    // 禁止使用未声明的变量
    'no-undef': 'error',

    // 禁止变量初始化为 undefined
    'no-undef-init': 'error',

    // 禁止使用 undefined
    'no-undefined': 'off',

    // 声明的变量必须被使用，https://eslint.org/docs/rules/no-unused-vars#disallow-unused-variables-no-unused-vars
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // 禁止声明前就使用变量
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
  },
};