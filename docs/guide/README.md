# 指南

::: warning
本页面文档持续撰写中，请关注。
:::

## 前置知识

加入开发前，您至少需要熟悉并掌握以下知识点，否则您遇到的问题将让自己怀疑人生。

- [Yarn Workspace](https://yarnpkg.com/zh-Hans/docs/workspaces)

- [Vue Cli 3](https://cli.vuejs.org/zh/)

- [ESlint](https://eslint.cn/)

- [Git](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

## 合并API

## 合并store

## 合并router

## 注册局部组件

## 注册菜单

## 事件总线

## 系统提示音

## 路径别名

单文件组件和 js 文件中，我们可以使用如下别名来减少目录的查找和定位，也能避免调整组件位置后重新修改路径的尴尬遭遇。

| 标识符 | 目标 |                          使用范围                           |
| :----: | :--: | :---------------------------------------------------------: |
|   @    | /src | js 语句，template 块中必须结合 v-bind 使用 require('@/xxx') |
| @root  |  /   | js 语句，template 块中必须结合 v-bind 使用 require('@/xxx') |
|   ~@   | /src |                         style 块中                          |
| ~@root |  /   |                         style 块中                          |

```javascript
<img :src="require('@root/static/img.png')">
```
