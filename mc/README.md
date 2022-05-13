# 村乐 MAC

目的是为了搭建一个「VUE3 新特性以及 TS 用法」的学习载体

[![npm](https://img.shields.io/static/v1?label=npm&message=14.17.3&logo=npm&color=red)](https://github.com/npm/cli) [![vite](https://img.shields.io/static/v1?label=vite&message=2.7.2&logo=vite&color=red)](https://github.com/vitejs/docs-cn) [![typescript](https://img.shields.io/static/v1?label=typescript&message=4.4.4&logo=typescript&color=red)](https://github.com/Microsoft/TypeScript) [![vue](https://img.shields.io/static/v1?label=vue&message=3.2.31&logo=vue&color=brightgreen)](https://github.com/vuejs/vue) [![vuex](https://img.shields.io/static/v1?label=vuex&message=4.0.2&logo=vuex&color=brightgreen)](https://github.com/vuejs/vuex) [![vue-router](https://img.shields.io/static/v1?label=vue-router&message=4.0.12&logo=vue-router&color=brightgreen)](https://github.com/vuejs/vue-router) [![axios](https://img.shields.io/static/v1?label=axios&message=0.25.0&logo=axios&color=blue)](https://github.com/axios/axios) [![arco-design](https://img.shields.io/static/v1?label=arco-design&message=2.21.2&logo=arco-design&color=blue)](https://github.com/arco-design/arco-design) [![less](https://img.shields.io/static/v1?label=less&message=4.1.2&logo=less&color=blue)](https://github.com/less/less.js) [![tailwindcss](https://img.shields.io/static/v1?label=tailwindcss&message=3.0.24&logo=tailwindcss&color=blue)](https://github.com/tailwindlabs/tailwindcss)

### 服务

项目依赖于[服务器](https://github.com/Binaryify/NeteaseCloudMusicApi.git)，同时启动可正常体验

### 安装

```
git clone https://github.com/jww997/CloudMusic.git
cd CloudMusic
cd mc
yarn
yarn dev
```

### 目录结构

```
mc
└─ .env.development      # 开发环境
└─ .env.test             # 测试环境
└─ .env.production       # 生产环境
├─ README.md
├─ public                # 静态资源
├─ src                   # 源码
│  ├─ apis               # 接口集合
│  ├─ assets             # 打包资源
│  ├─ components         # 公共组件
│  ├─ config             # 公共配置
│  ├─ constant           # 公共常量
│  ├─ layout             # 页面布局
│  ├─ locale             # 国际化
│  ├─ plugins            # 第三方插件
│  ├─ router             # 页面路由
│  ├─ store              # 状态管理
│  ├─ styles             # 公共样式
│  ├─ types              # 公共类型
│  ├─ utils              # 工具库
│  └─ views              # 页面模板
├─ tsconfig.json         # 配置编译TS
└─ vite.config.ts        # 配置脚手架VITE
└─ postcss.config.js     # 配置预处理器
└─ tailwind.config.js    # 配置TAILWIND
└─ ...
```

文档查阅： [编译 TS](https://www.tslang.cn/docs/home.html) / [脚手架 VITE](https://cn.vitejs.dev/guide/) / [预处理器](https://www.tailwindcss.cn/docs/using-with-preprocessors) / [TAILWIND](https://www.tailwindcss.cn/docs/configuration)
