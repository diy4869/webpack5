# webpack5踩坑

## 更新日志

[官方更新日志](https://github.com/webpack/changelog-v5/blob/master/README.md)

- node版本更新为v10。
- webpack5默认采用es6代码进行输出，4是es5的(可通过设置output.ecmaVersion来使用es5进行打包，默认是采用es2015进行生成)。
- webpack <= 4带有许多node.js核心模块的polyfill，5去掉了这些模块，专注于与前端兼容的模块。
- 优化了打包后的文件大小
- 长期缓存（默认开启）
- 自定义json解析器
- 优化后的tree shakking (可以针对嵌套的模块进行分析，未使用将在生产模式删除)
- splitChunk和模块大小(可以针对js和css样式进行更细致的切割，并用于minSize和maxSize)
- 模块命名
- 编译器空闲并关闭(在node中使用wepback()结束后，需要手动调用compiler.close(), compiler是当前webpack实例)
