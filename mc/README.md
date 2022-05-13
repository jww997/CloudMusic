# 村乐 MAC

目的是为了搭建一个「VUE3 新特性以及 TS 用法」的学习载体

<p>
  <a href="https://github.com/npm/cli">
    <img src="https://img.shields.io/badge/npm-14.17.3-blue" alt="npm">
  </a>
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/Vue-3.+-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vuejs/vuex">
    <img src="https://img.shields.io/badge/Vuex-4.+-brightgreen" alt="vuex">
  </a>
  <a href="https://github.com/Microsoft/TypeScript">
    <img src="https://img.shields.io/badge/TypeScript-4.+-blue" alt="typeScript">
  </a>
  <a href="https://github.com/arco-design/arco-design">
    <img src="https://img.shields.io/badge/arco--design-2.+-blue" alt="arco-design">
  </a>
  <a href="https://github.com/axios/axios">
    <img src="https://img.shields.io/badge/axios-0.25.0-blue" alt="axios">
  </a>
  <a href="https://github.com/tailwindlabs/tailwindcss">
    <img src="https://img.shields.io/badge/tailwindcss-2.+-blue" alt="tailwindcss">
  </a>
</p>

### 服务

依赖于[爬虫](https://github.com/Binaryify/NeteaseCloudMusicApi.git)，同时启动可正常体验

### 安装

```
git clone https://github.com/jww997/CloudMusic.git
cd CloudMusic
cd mc
yarn
yarn dev  // 开发环境
yarn devv // 测试环境
```

### 目录结构

```
mc
└─ .env.development   # 开发环境
└─ .env.test          # 测试环境
└─ .env.production    # 生产环境
├─ README.md
├─ public             # 静态资源
├─ src                # 源码
│  ├─ apis            # 接口集合
│  ├─ assets          # 打包资源
│  ├─ components      # 公共组件
│  ├─ config          # 公共配置
│  ├─ constant        # 公共常量
│  ├─ layout          # 页面布局
│  ├─ locale          # 国际化
│  ├─ plugins         # 第三方插件
│  ├─ router          # 页面路由
│  ├─ store           # 状态管理
│  ├─ styles          # 公共样式
│  ├─ types           # 公共类型
│  ├─ utils           # 工具库
│  └─ views           # 页面模板
├─ tsconfig.json      # 配置编译TS
└─ vite.config.js     # 配置脚手架VITE
└─ ...
```
