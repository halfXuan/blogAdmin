<!--
 * @Author: 471826078@qq.com
 * @Date: 2020-05-25 11:47:21
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-26 15:33:07
--> 
<template>
  <div class="user">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="createDate" label="注册日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="types" label="用户类型">
        <template slot-scope="scope">
          <el-link type="primary" v-if="scope.row.types===0">普通会员</el-link>
          <el-link v-if="scope.row.types===1">管理员</el-link>
          <el-link type="error" v-if="scope.row.types===2">已注销</el-link>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button @click="deleteUser(scope.row)" type="error" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { apiQueryUser, apiDeleteUser } from "@/api/user";
export default {
  name: "user",
  data() {
    return {
      tableData: [],
      email: ""
    };
  },
  methods: {
    onload() {
      apiQueryUser({ email: this.email }).then(res => {
        if (res.isSuccess) {
          this.tableData = res.data;
        }
      });
    },
    handleClick(row) {
      console.log(row);
    },
    deleteUser(item) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const { _id } = item;
          apiDeleteUser({ id: _id }).then(res => {
            if (res.isSuccess) {
              this.$message({
                type: "success",
                message: res.message
              });
              this.onload();
            } else {
              this.$message({
                type: "error",
                message: res.message
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  mounted() {
    this.onload();
  }
};
</script>
<style lang="less" scoped>
</style>