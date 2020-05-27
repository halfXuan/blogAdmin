<!--
 * @Author: 471826078@qq.com
 * @Date: 2020-05-21 10:31:40
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-27 14:43:47
--> 
<template>
  <div class="login">
    <div class="loginBox">
      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item>
          <p style="font-size:20px;">后台管理系统</p>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input placeholder="请输入手机号" v-model="form.phone">
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
          <div class="loginBoxSave">
            <el-checkbox v-model="checked">保存登录</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="loginBoxBtn" @click="submit('ruleForm')">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="loginBoxBtn" @click="toRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { apiLogin } from "@/api/login";
export default {
  name: "Login",
  data() {
    return {
      showPwd: false,
      checked: false,
      form: {
        phone: "",
        password: ""
      },
      rules: {
        phone: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const { phone, password } = this.form;
          apiLogin({ phone, password }).then(res => {
               console.log(res);
            if (res.isSuccess) {
           
              window.localStorage.setItem('blogToken',res.token)
              this.$message({
                type: "success",
                message: res.message
              });
              setTimeout(() => {
                this.$message("submit!");
                this.$router.replace("Home");
              }, 1000);
            } else {
              this.$message({
                type: "error",
                message: res.message
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    toRegister() {
      this.$router.replace("Register");
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  &Box {
    position: fixed;
    width: 400px;
    border: 1px solid #ccc;
    padding: 30px;
    border-radius: 5px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &Save {
      display: flex;
      justify-content: space-between;
    }
    &Btn {
      width: 100%;
    }
  }
}
</style>
<style>
.actived {
  color: #7cbcff;
}
.loginBox .el-input__icon {
  font-size: 18px;
}
</style>