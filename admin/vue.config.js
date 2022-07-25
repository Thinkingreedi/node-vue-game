module.exports = {
	outputDir: __dirname + '/../server/admin',
	publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
	lintOnSave: false, //关闭语法检查
}