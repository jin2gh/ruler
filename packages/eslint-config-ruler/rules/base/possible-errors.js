/**
 * @see http://eslint.org/docs/rules/#possible-errors
 */

module.exports = {
  rules: {
    // 要求 for 循环中的计数器朝着正确方向移动
    'for-direction': 'error',

    // 强制 getter 属性返回值
    'getter-return': ['error', { allowImplicit: true }],

    // 禁止使用 async 函数作为 Promise 的 executor
    'no-async-promise-executor': 'error',

    // 禁止在循环中使用 await，使用 Promise.all()
    'no-await-in-loop': 'error',

    // 禁止与 -0 进行比较
    'no-compare-neg-zero': 'error',

    // 禁止在条件表达式中使用赋值语句
    'no-cond-assign': ['error', 'always'],

    // 生产环境禁止使用 console
    'no-console': 'warn',

    // 禁止在条件表达式中使用常量
    'no-constant-condition': 'warn',

    // 禁止在正则表达式中使用 ASCII 码 0 - 31 的控制字符
    'no-control-regex': 'off',

    // 禁止使用 debugger
    'no-debugger': 'error',

    // 禁止函数参数出现重复命名的参数
    'no-dupe-args': 'error',

    // 禁止 if-else-if 链中的重复条件，ESLint 6.7.0
    'no-dupe-else-if': 'error',

    // 禁止对象出现重复命名的 key
    'no-dupe-keys': 'error',

    // 禁止 switch 语句中出现重复的 case
    'no-duplicate-case': 'error',

    // 禁止出现空语句
    'no-empty': 'error',

    // 禁止在正则表达式中使用空字符集 []，这不能匹配任何字符
    'no-empty-character-class': 'error',

    // 禁止对 catch 子句的入参重新赋值
    'no-ex-assign': 'error',

    // 避免不必要的布尔类型转换
    'no-extra-boolean-cast': 'error',

    // 禁止不必要的小括号
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
      },
    ],

    // 禁止不必要的分号
    'no-extra-semi': 'error',

    // 禁止对函数声明重新赋值
    'no-func-assign': 'error',

    // 禁止对导入的绑定重新赋值，ESLint 6.4.0
    // airbnb-base 是 off
    'no-import-assign': 'error',

    // 禁止在块中声明变量或函数
    'no-inner-declarations': 'error',

    // 禁止在 RegExp 构造函数中使用无效的正则表达式
    'no-invalid-regexp': 'error',

    // 禁止不规则的空白符
    'no-irregular-whitespace': 'error',

    // 禁止使用丢失精度的数字，ESLint 7.1.0
    'no-loss-of-precision': 'error',

    // 禁止在正则的字符集语法 [] 中使用由多个字符点构成的字符
    'no-misleading-character-class': 'error',

    // 禁止将全局对象 Math、JSON、Reflect 当作函数进行调用
    'no-obj-calls': 'error',

    // 禁止从 Promise 执行器函数返回值，ESLint 7.3.0
    'no-promise-executor-return': 'error',

    // 禁止直接调用 Object.prototypes 上的方法
    'no-prototype-builtins': 'error',

    // 禁止在正则表达式中出现多个连续空格
    'no-regex-spaces': 'error',

    // 禁止从 setter 返回值，ESLint 6.7.0
    'no-setter-return': 'off',

    // 禁用稀疏数组，如 var items = [,,]
    'no-sparse-arrays': 'error',

    // 不要在普通字符串中出现模板字符串占位语法，如 "Hello ${name}!"
    'no-template-curly-in-string': 'error',

    // 禁止出现令人困惑的多行表达式，多是由不加分号导致
    'no-unexpected-multiline': 'error',

    // 禁止在跳转语句后出现不可达的代码，return、throw、continue 或 break
    'no-unreachable': 'error',

    // 禁止在 finally 中出现控制流语句，如 return, throw, break 或 continue
    'no-unsafe-finally': 'error',

    // 禁止对关系运算符的左操作数使用否定操作符
    'no-unsafe-negation': 'error',

    // 禁止在使用 undefined 的上下文中使用可选链，ESLint 7.15.0
    'no-unsafe-optional-chaining': [
      'error',
      {
        disallowArithmeticOperators: true
      }
    ],

    // 禁止在正则表达式中使用无效的反向引用，ESLint 7.0.0-alpha.0
    'no-useless-backreference': 'error',

    // 避免因使用 await 或 yield 可能导致的竞态条件的赋值
    'require-atomic-updates': 'warn',

    // 使用 isNaN() 而不是直接与 NaN 进行比较
    'use-isnan': 'error',

    // 要求同 typeof 表达式结果比较的值必须是有效的字符串，即 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};