import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from "unplugin-vue-components/vite"
import { ArcoResolver } from "unplugin-vue-components/resolvers"
import path from 'path';
import themePreprocessorPlugin from "@zougt/vite-plugin-theme-preprocessor"

export default defineConfig({
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [ArcoResolver()],
    }),
    themePreprocessorPlugin({
      less: {
        // 各个主题文件的位置
        multipleScopeVars: [
          {
            scopeName: "theme-default",
            path: path.resolve("src/styles/themes/default.less"),
          },
          {
            scopeName: "theme-green",
            path: path.resolve("src/styles/themes/green.less"),
          },
        ],
      },
    }),
  ],
  server: {
    port: 9999,
    host: true,
    open: false,
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        // 引入预定义的变量
        additionalData: '@import "./src/styles/common.less";',
        // modifyVars: {
        //   'arcoblue-6': '#f85959',
        // },
        javascriptEnabled: true,
      }
    }
  },
});
