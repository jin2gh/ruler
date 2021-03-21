module.exports = {
  env: {
    node: true
  },

  rules: {
    // 强制回调函数中有 return 语句
    'callback-return': 'off',

    // 要求 require() 出现在顶层模块作用域中
    'global-require': 'error',

    // 要求回调函数中有容错处理
    'handle-callback-err': 'off',

    // 禁用 Buffer() 构造函数
    'no-buffer-constructor': 'error',

    // 禁止 require 调用与普通变量声明混合使用
    'no-mixed-requires': ['warn', false],

    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'error',

    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 'error',

    // 禁用 process.env
    'no-process-env': 'off',

    // 禁用 process.exit()
    'no-process-exit': 'off',

    // 禁用通过 require 加载的指定模块
    'no-restricted-modules': 'off',

    // 禁用同步方法
    'no-sync': 'off',
  }
};