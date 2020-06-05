<!--
 * @Author: 471826078@qq.com
 * @Date: 2020-05-29 10:18:42
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-06-01 17:33:03
--> 
<template>
  <div class="label">
    <el-card>
      <el-button type="promary" @click="add">新增</el-button>
    </el-card>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="标签名称" align="center" width="180"></el-table-column>
      <el-table-column align="center" prop="note" label="备注"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-link @click="deleteLabel(scope.row)" type="danger" size="small">删除</el-link>
          <el-link @click="modify(scope.row)" type="text" size="small">编辑</el-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNo"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>

    <!-- 新增弹窗 -->
    <el-dialog :title="form.dialodTitle" :visible.sync="isShow" width="716px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        width="720px"
        :modal-append-to-body="false"
      >
        <el-form-item label="标签名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="note">
          <el-input type="textarea" v-model="form.note"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="saveSubmit('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  apiAddLabel,
  apiDeleteLabel,
  apiModifyLabel,
  apiQueryLabel
} from "@/api/label";
export default {
  name: "labels",
  data() {
    return {
      isShow: false,
      form: {
        dialodTitle: "新增文章标签",
        id: "",
        name: "",
        note: ""
      },
      rules: {
        name: [{ required: true, message: "请输入标签名称", trigger: "blur" }]
      },
      tableData: [],
      pageNo: 1,
      pageSize: 10,
      total: 0
    };
  },
  methods: {
    onload() {
      apiQueryLabel().then(res => {
        if (res.isSuccess) {
          this.tableData = res.data;
        } else {
          this.$message({
            type: "error",
            message: res.message
          });
        }
      });
    },
    add() {
      this.isShow = true;
      this.form = {
        dialodTitle: "新增文章标签",
        id: "",
        name: "",
        note: ""
      };
    },
    saveSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const { id, name, note } = this.form;
          if (id) {
            apiModifyLabel({ id, name, note }).then(res => {
              if (res.isSuccess) {
                this.$message({
                  type: "success",
                  message: res.message
                });
                this.onload();
                this.isShow = false;
              } else {
                this.$message({
                  type: "error",
                  message: res.message
                });
              }
            });
          } else {
            apiAddLabel({ name, note }).then(res => {
              if (res.isSuccess) {
                this.$message({
                  type: "success",
                  message: res.message
                });
                this.onload();
                this.isShow = false;
              } else {
                this.$message({
                  type: "error",
                  message: res.message
                });
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    modify(item) {
      const { _id, name, note } = item;
      this.form = {
        dialodTitle: "修改文章标签",
        id: _id,
        name,
        note
      };
      this.isShow = true;
    },
    deleteLabel(item) {
      const { _id } = item;
      this.$confirm("确认删除改网点吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          apiDeleteLabel({ id: _id }).then(res => {
            if (res.isSuccess) {
              this.$message({
                type: "success",
                message: "删除成功 !"
              });
              this.onload();
            } else {
              this.$message({
                type: "warning",
                message: res.errorMsg
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
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.pageNo = val;
    }
  },
  mounted() {
    this.onload();
  }
};
</script>
<style lang="less" scoped>
.demo-ruleForm .el-input{
  width: 224px;
}
</style>