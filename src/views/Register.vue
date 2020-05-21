<!--
 * @Author: 471826078@qq.com
 * @Date: 2020-05-21 11:35:12
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-21 11:38:22
--> 
<template>
  <div class="register">
    <div class="registerBox">
      <el-form :model="form" :rules="rules" ref="ruleForm">
          <el-form-item>
              <p style="font-size:20px;">注册管理系统账号</p>
          </el-form-item>
        <el-form-item prop="account">
          <el-input placeholder="请输入账号" v-model="form.account">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" :type="showPwd?'text':'password'" v-model="form.password">
            <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
            <i
              slot="suffix"
              :class="showPwd?'el-input__icon el-icon-view actived':'el-input__icon el-icon-view'"
              @click="showPwd=!showPwd"
            ></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="registerBoxSave">
            <!-- <el-checkbox v-model="checked">保存登录</el-checkbox> -->
            <el-link type="primary">已有账号返回登录</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="registerBoxBtn">注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="registerBoxBtn">返回登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      showPwd: false,
      checked: false,
      form: {
        account: "",
        password: ""
      },
      rules: {
        account: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  }
};
</script>
<style lang="less" scoped>
.register{
    position: relative;
    width: 100%;
    height: 100%;
    &Box{
        position: fixed;
        width: 400px;
        border: 1px solid #ccc;
        padding: 30px;
        border-radius: 5px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        &Save{
            display: flex;
            justify-content: space-between;
        }
        &Btn{
             width: 100%;
        }
    }
}
</style>
<style>
.actived {
  color: #7cbcff;
}
.registerBox .el-input__icon {
  font-size: 18px;
}
</style>