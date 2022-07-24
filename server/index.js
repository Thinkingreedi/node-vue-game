// 引入express
const express = require("express")
// 使用express
const app = express()
// 设置加密
app.set('secret', 'q3w4e5r6t7')
// 跨域
app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)


app.listen(3000, () => {
    console.log('http://localhost:3000')
})