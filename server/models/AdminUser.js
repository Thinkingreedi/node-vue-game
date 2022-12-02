// 用户的数据模型
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: { type: String },
    password: {
        type: String,
        // 密码不可查
        select: false,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        }
    },
})

module.exports = mongoose.model('AdminUser', schema)