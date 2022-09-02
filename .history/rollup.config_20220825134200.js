// 请先安装 rollup-plugin-esbuild @vitejs/plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild'
// 把typescript变成js
import vue from 'rollup-plugin-vue'
// 把vue变成js
import scss from 'rollup-plugin-scss'
// 把cscc变成js
import dartSass from 'sass';
// dartSass是用来支持scss插件的
import { terser } from "rollup-plugin-terser"
// 用来把js代码转化
import md from 'rollup-plugin-md'

export default {
  input: 'src/lib/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'Smile-Ui',
    file: 'dist/lib/Smile-Ui.js',
    format: 'umd',
    plugins: [terser()]
  },{
    name: 'Smile-Ui',
    file: 'dist/lib/Smile-Ui.esm.js',
    format: 'es',
    plugins: [terser()]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    vue({
      include: /\.vue$/,
    }),
    md({
      include: /\.md$/
    }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
  ],
} 