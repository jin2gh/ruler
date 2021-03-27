/**
 * @see https://eslint.org/docs/rules/#best-practices
 */

module.exports = {
  rules: {
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 'off',

    // 强制数组某些方法的回调函数中必须包含 return 语句
    'array-callback-return': ['error', { allowImplicit: true }],

    // 把 var 的使用限制在其定义的作用域范围内，不能在块外使用
    'block-scoped-var': 'error',

    // 强制类方法使用 this
    'class-methods-use-this': ['error', { exceptMethods: [] }],

    // 限制圈复杂度
    complexity: ['warn', 20],

    // 要求 return 语句总是指定返回的值，要么不指定
    'consistent-return': 'off',

    // 控制语句的括号，多行语句必须用大括号，单行语句可以省略
    curly: ['error', 'multi-line'],

    /**
     * 要求 switch 语句有 default 分支，或者通过注释 `// no default` 跳过
     * commentPattern 为一个正则表达式字符串，来修改默认的 /^no default$/i 注释匹配模式
     */
    'default-case': ['error', { commentPattern: '^no default$' }],

    // 强制 default 子句在 switch 语句的最后
    // version@7.0.0-alpha.0
    'default-case-last': 'off',

    // 要求将函数默认参数放在最后，ESLint 6.4.0
    'default-param-last': 'off',

    // 统一在点号之前换行
    'dot-location': ['error', 'property'],

    // 优先使用点号访问对象的属性
    'dot-notation': ['error', { allowKeywords: true }],

    // 要求严格相等运算符
    eqeqeq: ['warn', 'always', { null: 'ignore' }],

    // 要求在对象和类中的 setter、getter 分组（相邻出现），ESLint 6.7.0
    'grouped-accessor-pairs': 'off',

    // for-in 循环中需要对 key 进行验证
    'guard-for-in': 'error',

    // 强制每个文件中包含的类的数量,
    'max-classes-per-file': 'off',

    // 禁用 alert、confirm 和 prompt
    'no-alert': 'warn',

    // 禁用 arguments.caller 和 arguments.callee
    'no-caller': 'error',

    // case 或 default 字句出现词法声明时，必须用块包裹
    'no-case-declarations': 'error',

    // 禁止在构造函数中返回值
    'no-constructor-return': 'error',

    // 禁止除法运算符显式的出现在正则表达式开始的位置
    'no-div-regex': 'off',

    // 禁止在 else 前有 return
    'no-else-return': ['error', { allowElseIf: false }],

    // 禁止出现空函数
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    // 禁止在解构中出现空模式，即 {} 或 []
    'no-empty-pattern': 'error',

    // 与 null 的比较必须使用严格等于操作符
    'no-eq-null': 'off',

    // 禁止使用 eval()
    'no-eval': 'error',

    // 禁止扩展 native 类型
    'no-extend-native': 'error',

    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 'error',

    // 禁止不必要的标签
    'no-extra-label': 'error',

    // 禁止 case 语句落空
    'no-fallthrough': 'error',

    // 禁止省略小数点前或小数点后的 0，否则会使数字和点操作符难以区分
    'no-floating-decimal': 'error',

    // 禁止对 native 类型或只读的全局对象进行赋值
    'no-global-assign': 'error',

    // 禁止使用较短的符号实现类型转换
    'no-implicit-coercion': [
      'warn',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    // 禁止在全局范围使用变量和函数声明
    // @reason 这条在 "parserOptions": { "sourceType": "module" } 下不起作用
    'no-implicit-globals': 'off',

    // 禁止使用类 eval 的方法，如 setTimeout 传入字符串
    'no-implied-eval': 'error',

    // 禁止在 class 外使用 this
    'no-invalid-this': 'off',

    // 禁止使用 __iterator__ 属性
    'no-iterator': 'error',

    // 不要使用标签
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // 禁止使用不必要的代码块
    'no-lone-blocks': 'error',

    // 禁止在循环出现函数，ES5 可能经常使用这种方式以防止闭包副作用
    'no-loop-func': 'error',

    // 禁用魔术数字
    'no-magic-numbers': [
      'warn',
      {
        ignore: [1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    // 禁止出现多个空格
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],

    // 禁止使用多行字符串
    'no-multi-str': 'error',

    // 禁止单独 new 一个构造函数而不用于赋值或比较
    'no-new': 'error',

    // 禁用 Function 构造函数创建函数
    'no-new-func': 'error',

    // 不要使用 new Number/String/Boolean
    'no-new-wrappers': 'error',

    // 禁止 \8和 \9 转义字符串中的序列
    // version@7.14.0
    'no-nonoctal-decimal-escape': 'error',

    // 禁用八进制字面量
    'no-octal': 'error',

    // 禁止在字符串字面量中使用八进制转义序列，如 var foo = 'Copyright \251'
    'no-octal-escape': 'error',

    // 禁止对函数参数赋值
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
        ],
      },
    ],

    // 禁止使用 __proto__ 属性
    'no-proto': 'error',

    // 不要重复声明变量和函数
    'no-redeclare': 'error',

    // 禁止使用对象的某些属性
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
    ],

    // 禁止在 return 语句中赋值
    'no-return-assign': ['error', 'always'],

    // 禁止不必要的 return await
    'no-return-await': 'off',

    // 禁止使用 javascript:url，如 location.href = 'javascript:void(0)';
    'no-script-url': 'error',

    // 禁止自我赋值
    'no-self-assign': 'error',

    // 禁止自我比较
    'no-self-compare': 'error',

    // 禁止使用逗号操作符，除了以下情况：在初始化或者更新部分 for 语句时；明确用小括号包裹
    'no-sequences': 'error',

    // 不要抛出字面量异常
    'no-throw-literal': 'error',

    // 禁用不变的循环条件
    'no-unmodified-loop-condition': 'off',

    // 禁止出现未使用的表达式
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    // 禁止未使用的标签
    'no-unused-labels': 'error',

    // 禁用不必要的 .call() 和 .apply()
    'no-useless-call': 'off',

    // 禁用不必要的 catch
    'no-useless-catch': 'error',

    // 禁止不必要的字符串拼接
    'no-useless-concat': 'error',

    // 禁止不必要的转义字符
    'no-useless-escape': 'error',

    // 禁止多余的 return 语句
    'no-useless-return': 'error',

    // 不要使用 void 运算符，void 0 可以返回 undefined
    'no-void': 'off',

    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': [
      'off',
      {
        terms: ['todo', 'fixme'],
        location: 'start',
      }
    ],

    // 禁止使用 with
    'no-with': 'error',

    // 建议在正则表达式中使用命名捕获组
    // version@5.15.0
    'prefer-named-capture-group': 'off',

    // 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': ['warn', { allowEmptyReject: true }],

    // 禁止使用RegExp构造函数以支持正则表达式文字
    // version@6.4.0
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // 要求 parseInt() 方法时总是带上基数
    radix: 'error',

    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'off',

    // 强制正则使用 u 标识
    'require-unicode-regexp': 'off',

    // 要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': 'error',

    // 将立即执行函数表达式（IIFE）用小括号包裹
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: false }],

    // 使用 color === 'red' 而不是 'red' === color
    yoda: 'warn',
  },
};