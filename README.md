## 项目结构
```
.
├── components (公共组件目录)
├── libs（第三方插件、组件库）
├── pages（主包目录）
│   └── home (app.json 设置的入口页)
│       ├── home.wxml
│       ├── home.js
│       ├── home.json
│       └── home.wxss
├── assets（公用资源）
│   ├── images (图片目录)
│   ├── styles (公共样式)
│   └── ...
├── subpackages（分包目录）
│   │── order
|   └── store
├── utils（公共模块，工具类）
│   ├── config.js（项目配置）
│   ├── filters.wxs（过滤器）
│   ├── constants.js（常量）
│   ├── request.js（请求封装）
│   └── validator.js (校验器)
├── proxies (接口请求代理)
│   ├── common.js (公共模块)
│   ├── user.js (用户模块)
│   └── ...
├── app.js
├── app.json
├── app.wxss
├── project.config.json
├── sitemap.json
└── README.md
```
