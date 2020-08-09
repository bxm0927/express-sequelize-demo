# Nodejs 全栈入门

学习地址：https://www.imooc.com/learn/1199

课程里面的功能都能走通，如果遇到问题可以一起讨论，微信号: bxm_0927

## 需求分析

这是一个“待办事项”应用程序，主要有以下功能：

- 待办事项列表，支持分页，支持筛选（全部/已完成/未完成/已删除）
- 修改事项列表状态（已完成/未完成/已删除）
- 添加待办事项
- 编辑待办事项
- 删除待办事项

## 库表设计

创建一个数据库 `todos`，字符集 `utf8mb4`，排序规则 `utf8mb4_croatian_ci`

Todos:

- status
- name
- content
- deadline

## 项目初始化构建

```
npm install express --save

npm install mysql2 --save

npm install sequelize --save

npm install sequelize-cli --save-dev
```

```
# 初始化目录结构
npx sequelize-cli init

# 创建表模型
npx sequelize-cli model:generate --name Todo --attributes name:string,content:string,deadline:string

# 在数据库中实际创建该表
npx sequelize-cli db:migrate
```
