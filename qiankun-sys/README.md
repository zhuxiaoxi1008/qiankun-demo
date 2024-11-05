# qiankun-sys

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
---


nginx配置

html ——> index      # qiankun-sys
        child/app1  # qiankun-app1

```
 #access_log  logs/host.access.log  main;
        location /child/app1 {
            root   html;
            index  index.html index.htm;
            try_files $uri $uri/ /child/app1/index.html;
        }

        location / {
            root   html;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
        }
```