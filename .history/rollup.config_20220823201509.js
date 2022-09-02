// 请先安装 rollup-plugin-esbuild @vitejs/plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"
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
      
    })
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
  ],
} 