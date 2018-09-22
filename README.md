# 模拟 大众点评 WebApp

## [React高级实战 打造大众点评 WebApp by 双越](https://coding.imooc.com/learn/list/99.html) 实战项目 基于 [⚛️ React 同构脚手架 by 54sword ](https://github.com/54sword/react-starter)

## API [React-Dianping-API](https://github.com/lengzhang/React-Dianping-API)

构建伪 API 模拟前后端数据传输

## 开始

***没有在windows机器上测试过，可能会报错***

```
$ git clone git@github.com:lengzhang/React-Dianping.git
$ cd React-Dianping
$ npm install
$ npm run dev
```
浏览器打开 [http://localhost:4010](http://localhost:4010)

## 相关命令说明

### 开发环境  

***注意：开发环境下，代码不分片，生产环境下才会分片***

```
npm run dev
```

### 生产环境测试


```
npm run dist
npm run server
```

## 部署到服务器
1、修改 config/index.js 中的 public_path 配置  
2、打包文件，除了index.ejs是服务端渲染的模版文件，其他都是客户端使用的文件

```
npm run dist
```

3、将项目上传至你的服务器  
4、启动服务  

Node 启动服务

```
NODE_ENV=production __NODE__=true BABEL_ENV=server node src/server
```

或使用 pm2 启动服务

```
NODE_ENV=production __NODE__=true BABEL_ENV=server pm2 start src/server --name "React-Dianping" --max-memory-restart 400M
```
