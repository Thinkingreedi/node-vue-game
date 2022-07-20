const express = require("express")

const app = express()

app.set('secret', 'q3w4e5r6t7')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})