<!--
 * @Author: 471826078@qq.com
 * @Date: 2020-05-21 09:50:47
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-21 17:50:45
--> 
<template>
  <el-container class="home">
    <el-header>Header</el-header>
    <el-container>
      <el-aside :class="isCollapse?'el-aside-cop':''">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>-->
        <el-link type="primary" @click="isCollapse=!isCollapse" style="width:60px;height:40px">
          <i :class="isCollapse?'el-icon-right':'el-icon-back'"></i>
        </el-link>
      </el-aside>
      <el-main>
        <el-card>
           <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
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
       <el-card>
          版权所有
       </el-card>
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
    handleClose() {}
  }
};
</script>
<style lang="less" scoped>
.home {
  position: relative;
  height: 100%;
  &Main{
    height: calc( 100% - 128px);
    margin-top: 10px;
    overflow: auto;
  }
}
</style>
<style>
.el-main{
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
.el-footer{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>