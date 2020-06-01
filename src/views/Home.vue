<!--
 * @Author: 471826078@qq.com
 * @Date: 2020-05-21 09:50:47
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-29 10:20:22
--> 
<template>
  <el-container class="home">
    <el-header>Header</el-header>
    <el-container>
      <el-aside :class="isCollapse?'el-aside-cop':''">
        <el-menu
          :default-active="$store.state.defaultActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          @select="handleSelect"
        >
          <el-menu-item index="/Home/Board">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/Home/User">
            <i class="el-icon-menu"></i>
            <span slot="title">用户列表</span>
          </el-menu-item>
          <el-menu-item index="/Home/Comment">
            <i class="el-icon-document"></i>
            <span slot="title">评论管理</span>
          </el-menu-item>
          <el-menu-item index="/Home/Label">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">文章管理</span>
            </template>
            <el-menu-item index="/Home/AddAcrticle">
              <i class="el-icon-setting"></i>
              <span slot="title">添加文章</span>
            </el-menu-item>
            <el-menu-item index="/Home/AcrticleList">
              <i class="el-icon-setting"></i>
              <span slot="title">文章列表</span>
            </el-menu-item>
            <el-menu-item index="/Home/Label">
              <i class="el-icon-setting"></i>
              <span slot="title">文章标签</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <el-link type="primary" @click="isCollapse=!isCollapse" style="width:60px;height:40px">
          <i :class="isCollapse?'el-icon-right':'el-icon-back'"></i>
        </el-link>
      </el-aside>
      <el-main>
        <el-card>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">活动管理</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-card>
        <el-card class="homeMain">
          <router-view></router-view>
        </el-card>
        <el-card>版权所有</el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    handleSelect(index, indexPath) {
      console.log(indexPath);

      this.$store.commit("setStore", [
        "defaultActive",
        indexPath[indexPath.length - 1]
      ]);
      if (indexPath[indexPath.length - 1].indexOf("/") !== -1) {
        this.$router.replace(indexPath[indexPath.length - 1]);
      }
    }
  },
  mounted() {
    this.$router.push("/Home/Board");
  }
};
</script>
<style lang="less" scoped>
.home {
  position: relative;
  height: 100%;
  &Main {
    height: calc(100% - 128px);
    margin-top: 10px;
    overflow: auto;
  }
}
</style>
<style>
.el-main {
  padding: 15px 15px 0;
}
.el-header {
  background-color: #f1f1f1;
}
.el-aside {
  max-width: 240px !important;
}
.el-aside-cop {
  width: 67px !important;
}
.el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>