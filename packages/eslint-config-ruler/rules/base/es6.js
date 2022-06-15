/**
 * @see https://eslint.org/docs/rules/#ecmascript-6
 */

module.exports = {
  rules: {
    // 箭头函数是否在函数体中使用大括号
    'arrow-body-style': [
      'off',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // 箭头函数参数始终加上小括号
    'arrow-parens': ['warn', 'always'],

    // 箭头函数的箭头前后留一个空格，默认
    'arrow-spacing': ['error', { before: true, after: true }],

    // 子类的 constructor 中必须调用 super，非子类的 constructor 中不能调用 super
    'constructor-super': 'error',

    // generator 函数的 * 号前面无空格，后面有一个空格
    'generator-star-spacing': ['error', { before: false, after: true }],

    // 禁止修改类声明变量
    'no-class-assign': 'error',

    // 避免箭头函数与比较操作符产生混淆
    'no-confusing-arrow': 'error',

    // 禁止修改 const 声明的变量
    'no-const-assign': 'error',

    // 避免重复的类成员命名
    'no-dupe-class-members': 'error',

    // 禁止用多个 import 引入同一模块，off => 同 import/no-duplicates
    'no-duplicate-imports': 'off',

    // 禁止使用 new Symbol
    'no-new-symbol': 'error',

    // 禁止导出中的指定名称，ESLint 7.0.0-alpha.0 引入
    'no-restricted-exports': [
      'off',
      {
        restrictedNamedExports: [
          'default', // 允许 `export default`
          'then',
        ],
      }
    ],

    // 禁止特定的 import
    'no-restricted-imports': [
      'off',
      {
        paths: [],
        patterns: [],
      },
    ],

    // 禁止在调用 super() 前使用 this 或 super 关键字
    'no-this-before-super': 'error',

    // 对象的 key 不要使用无必要的计算属性
    'no-useless-computed-key': 'error',

    // 禁止不必要的 constructor
    'no-useless-constructor': 'error',

    // 禁止在解构和 import/export 时进行无用的重命名
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // 禁止使用 var 声明
    'no-var': 'error',

    // 使用对象属性和方法的简写语法
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // 回调函数使用箭头函数而不是匿名函数
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // 优先使用 const，只有当变量会被重新赋值时才使用 let
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // 优先使用对象和数组的解构
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: { // 变量声明
          array: false,
          object: true,
        },
        AssignmentExpression: { // 赋值表达式
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // 禁止使用 parseInt() 进行二、八、十六禁止转换
    'prefer-numeric-literals': 'error',

    // 使用 rest 替代 arguments 对象
    'prefer-rest-params': 'warn',

    // 使用扩展语法 ... 替代 apply()
    'prefer-spread': 'warn',

    // 使用模板字符串替代字符串拼接
    'prefer-template': 'error',

    // generator 函数内必须有 yield 语句
    'require-yield': 'error',

    // 剩余和扩展操作符与操作对象间不应有空格
    'rest-spread-spacing': ['error', 'never'],

    // 为 import 排序
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    // 创建 Symbol 时必须传入参数
    'symbol-description': 'error',

    // 模板字符串中的大括号内部两侧无间距
    'template-curly-spacing': 'off',

    // yield* 表达式的 * 号前面无空格，后面有一个空格
    'yield-star-spacing': ['error', 'after'],
  },
};