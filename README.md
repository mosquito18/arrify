# arrify

## 了解数组

### 类数组对象

传送门： https://segmentfault.com/a/1190000024526235

### 可迭代对象

传送门：https://blog.csdn.net/m0_71485750/article/details/125448429

## arrify转换规则
1. Null和Undefined返回空数组
2. 数组不必转换，返回本身
3. String 属于可迭代对象，但希望他保持整体作为数组元素存在
4. 可迭代对象，浅拷贝迭代值创建新数组
5. 其他类型直接被数组包裹

不转换类数组对象的原因： 如果把类数组对象看作是数组而非对象，假设用户希望类数组对象被转换为数组中的元素该怎么办。用户应使用 `Array.from `自行转换

## 依赖

- `xo`:一个开箱即用的 Linter，内部是 ESLint，但 Lint 规则都预置好了，不接受 eslintrc 配置
- `tsd`: 为类型定义编写测试，创建一个 .test-d.ts后缀的文件就行
- `ava`: Node.js 环境下的测试运行器，执行根目录下 test.js 测试文件

测试启动脚本
```
"scripts": {
    "test": "xo && ava && tsd"
},
```
- 先让`xo`对js和ts做Lint
- 再交给 `ava` 跑 test.js 测试 index.js
- 最后是 `tsd` 跑 index.test-d.ts 测试 index.d.ts

依托这三个依赖，Lint 到测试全流程无需任何配置

## 学习
1. 什么是类数组对象:带有`length`属性的非数组对象

2. 什么是可迭代对象

- 可迭代对象本身或原型链上实现了 `[Symbol.iterable]`方法，可以根据 `typeof obj[Symbol.iterable] === "function"`判断是否是可迭代对象
- 迭代方法返回迭代器对象，一个带有 next 方法的对象，next 方法返回 done 和 value 构成的迭代信息