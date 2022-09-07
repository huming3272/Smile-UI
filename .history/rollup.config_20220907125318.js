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
// 用来把js代码转化变得简短，减小文件和对代码的混淆
import md from 'rollup-plugin-md'
// 把markdown变成js
export default {
  input: 'src/lib/index.ts',
  //  输入文件
  output: [{
    globals: {
      vue: 'Vue'
      // 用到全局变量vue，不用打包
    },
    name: 'wheel-smile-ui',
    file: 'dist/lib/smile-ui.js',
    // 输出路径
    format: 'umd',
    // UNICODE(UCS-2)格式
    plugins: [
      ,terser()]
    // 之前提到的代码压缩插件
  },{
    name: 'wheel-smile-ui',
    file: 'dist/lib/smile-ui.esm.js',
    format: 'es',
    plugins: [
      terser()
    ]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    // 对所有的scss文件进行编译
    vue({
      include: /\.src?\\lib?\\\.vue$/,
      // 对所有的vue文件进行编译
    }),
    md({
      include: /\.md$/
      // 对所有的md文件进行编译
    }),
    esbuild({
      include: /\.[jt]s$/,
      // 对所有的ts、js编译成ie支持的js文件
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
      //  es6以下不支持
    }),
  ],
} 