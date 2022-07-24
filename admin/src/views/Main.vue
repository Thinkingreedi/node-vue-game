<template>
  <!-- 撑满屏幕高度 -->
  <el-container style="height: 100vh">
    <!-- 侧边栏 -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 243)">
      <!-- 菜单栏 -->
      <el-menu
        router
        :default-openeds="['1']"
        unique-opened
        default-active="$route.path"
      >
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-s-fold"></i>内容管理</template
          >
          <el-menu-item-group>
            <template slot="title">物品</template>
            <el-menu-item index="/items/create">新建物品</el-menu-item>
            <el-menu-item index="/items/list">物品列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">英雄</template>
            <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
            <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-opportunity"></i>运营管理
          </template>
          <el-menu-item-group>
            <template slot="title">广告</template>
            <el-menu-item index="/ads/create">新建广告位</el-menu-item>
            <el-menu-item index="/ads/list">广告位列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-menu"></i>系统设置</template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- 头部栏 -->
      <el-header style="text-align: right">
        <el-button size="small" style="color: black" @click="loginOut">
          退出</el-button
        ></el-header
      >
      <!-- 主界面栏 -->
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    loginOut() {
      this.$confirm("是否退出当前账户?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        window.localStorage.clear();
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style>
.el-header {
  background-color: #b3bdcc;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
