<template>
  <div class="login">
    <div class="login-container">
      <el-card header="账号密码登录" class="login-card">
        <!-- 登录表单 -->
        <el-form
          @submit.native.prevent="login"
          ref="loginFormRef"
          :rules="LoginRules"
          :model="LoginForm"
        >
          <!-- 账号 -->
          <el-form-item label="用户名" prop="username">
            <el-input v-model="LoginForm.username"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="LoginForm.password"></el-input>
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item class="btns">
            <el-button type="primary" native-type="submit">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 账号正则校验
    let checkUsername = (rule, value, callback) => {
      const regUsername = /^[a-zA-Z][\w]{2,9}$/;
      if (regUsername.test(value)) return callback();
      callback(new Error("请输入合法的用户名"));
    };
    // 密码正则校验
    let checkPassword = (rule, value, callback) => {
      const regPsw = /^[\w.]{6,15}$/;
      if (regPsw.test(value)) return callback();
      callback(new Error("请输入合法的登陆密码"));
    };

    return {
      // 账号密码默认为空
      LoginForm: {
        username: "",
        password: "",
      },
      //表单验证规则
      LoginRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            validator: checkUsername,
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入登陆密码",
            trigger: "blur",
          },
          {
            validator: checkPassword,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 点击按钮,重置表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 点击按钮,进行登录
    async login() {
      const res = await this.$http.post("login", this.LoginForm);
      (localStorage.token = res.data.token),
        this.$router.push("/"),
        this.$message({
          type: "success",
          message: "登录成功",
        });
    },
  },
};
</script>

<style scope>
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/login-bg.jpg") no-repeat 0 0;
  background-size: cover;
  position: fixed;
}
.login-card {
  width: 25rem;
  margin: 5rem auto;
  opacity: 0.8;
  text-align: center;
}
.btns {
  display: flex;
  justify-content: center;
  margin-bottom: 0;
}
</style>
