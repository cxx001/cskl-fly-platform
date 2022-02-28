# cskl-fly-platform
> 环境搭建
1. 安装nodejs 推荐14.16.0版本
2. 在根目录和frontend目录下分别执行npm install
3. 运行：<br />
  a. web：根目录下npm run web-dev(启动egg服务)  frontend目录下npm run serve
  b. 本地: 根目录npm run dev   frontend目录下npm run serve
  c. 其他看package.json scripts命令

> 目录结构
```
project
├── package.json
├── asset 资源目录
├── bulid 打包用的资源和脚本
		├── icons 软件图标（打包用到）
    ├── extraResources 额外资源目录
├── app egg服务，与官方一致
		├── const 常量
    ├── controller 控制器
    ├── middleware 中间件
    ├── public 前端资源目录
    ├── router 路由
    ├── schedule 定时任务
    ├── service 业务层
    ├── utils 工具函数
    ├── view 视图
├── config egg服务，配置文件，与官方一致
		├── config.default.js 默认配置，都会加载
    ├── config.local.js dev环境加载
    ├── config.prod.js 生产环境加载
├── electron
		├── apis electron业务层
    ├── ipc electron ipc业务层
    ├── lib 一些封装库
├── frontend 前端目录（vue编写的UI在这里）    
├── out 打包后的可执行文件
├── run 一些运行缓存
├── tools 一些工具脚本 
├── main.js electron入口文件 
├── app.js egg文件
```

> 其它详情参考 <br />

https://www.yuque.com/u34495/mivcfg/xnhmms