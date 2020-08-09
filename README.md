# Nodejs 全栈入门

学习地址：https://www.imooc.com/learn/1199

课程里面的功能都能走通，如果遇到问题可以一起讨论，微信号: bxm_0927

## Sequelize 简介

Sequelize.js 是 Node.js ORM（Object-Relational-Mapper）框架，提供对 MySQL，MariaDB，SQLite 和 PostgreSQL 数据库的简单访问，通过映射数据库条目到对象，或者对象到数据库条目。

## 在 Node.js 中集成 Sequelize

官方文档：https://sequelize.org/master/manual/migrations.html

```
# 安装 Node.js mysql 驱动
npm install mysql2 --save

npm install sequelize --save

npm install sequelize-cli --save-dev
```

```
# 初始化目录结构
npx sequelize-cli init

# 创建表模型
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

# 在数据库中实际创建该表
npx sequelize-cli db:migrate
```

## 常见问题

### `ERROR: Please install mysql2 package manually`

报错原因是没有安装 Node.js 的 mysql 驱动，安装即可。

```
npm install mysql2 --save
```

### `UnhandledPromiseRejectionWarning: SequelizeDatabaseError: Incorrect string value`

字符编码问题，修改数据库为 utf8mb4 编码即可。
