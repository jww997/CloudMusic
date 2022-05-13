import { defineConfig } from 'vite';
import path from 'path';
import { plugins } from '../mc/src/plugins';

export default defineConfig({
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins,
  server: {
    port: 9999,
    host: true,
    open: false,
    proxy: {
      '/api': {
        // target: 'http://119.23.73.240:3000',
        // target: 'http://localhost:3000',
        // target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        // 引入预定义的变量
        additionalData: '@import "./src/styles/common.less";'
      }
    }
  },
  define: {
    'process.env': {},
    // "compilerOptions": { //编译选项,可以被忽略，这时编译器会使用默认值
    //   "strictNullChecks": true, //在严格的null检查模式下，null和undefined值不包含在任何类型里，只允许赋值给void和本身对应的类型。
    // }
  },
});
