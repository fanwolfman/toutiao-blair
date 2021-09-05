# toutiao-blair

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 注意点 
```
适配问题 
1、cnpm install --save amfe-flexible
2、npm install postcss-pxtorem -D
	创建postcss.config.js
	module.exports = {
	  plugins: {
	    'autoprefixer': {
	      browsers: ['Android >= 4.0', 'iOS >= 7']
	    },
	    'postcss-pxtorem': {
	      rootValue: 37.5,//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
	      propList: ['*']
	    }
	  }
	}
```
