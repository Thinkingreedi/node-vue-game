<template>
  <div class="login">
    <div class="login-container">
      <el-card header="请先登录" class="login-card">
        <!-- <el-form @submit.native.prevent="login" ref="loginFormRef"> -->
        <el-form @submit.native.prevent="login">
          <el-form-item label="用户名">
            <el-input v-model="model.username"></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input type="password" v-model="model.password"></el-input>
          </el-form-item>

          <el-form-item class="btns">
            <el-button type="primary" native-type="submit">登录</el-button>
            <!-- <el-button type="info" @click="resetLoginForm">重置</el-button> -->
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    //点击按钮,重置表单
    // resetLoginForm() {
    //   this.$refs.loginFormRef.resetFields();
    // },
    async login() {
      const res = await this.$http.post("login", this.model);
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
}
.btns {
  display: flex;
  justify-content: center;
  margin-bottom: 0;
}
</style>
