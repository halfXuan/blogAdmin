
<template>
  <div class="links">
    <el-button type="primary" @click="add">新增</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="链接名称" align="center" width="180"></el-table-column>
      <el-table-column align="center" prop="url" label="链接地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-link @click="deleteLabel(scope.row)" type="danger" size="small">删除</el-link>
          <el-link @click="modify(scope.row)" type="text" size="small">编辑</el-link>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <el-dialog :title="form._id? '新增热门链接':'修改热门链接'" :visible.sync="dialogVisible" width="800">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="链接名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="链接地址" prop="url">
          <el-input v-model="form.url"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { apiAddLinks, apiQueryLinks, apiDeleteLinks } from "@/api/links";
export default {
  name: "links",
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      form: {
        _id: "",
        name: "",
        url: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入链接名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        url: [{ required: true, message: "请输入链接地址", trigger: "blur" }]
      }
    };
  },
  methods: {
    onload() {
      apiQueryLinks({}).then(res => {
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
      this.dialogVisible = true;
      this.form = {
        _id: "",
        name: "",
        url: ""
      };
      //   this.resetForm('ruleForm')
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const { _id, name, url } = this.form;
          apiAddLinks({ _id, name, url }).then(res => {
            if (res.isSuccess) {
              setTimeout(() => {
                this.dialogVisible = false;
                this.onload();
              }, 2000);
            } else {
              setTimeout(() => {
                this.$message({
                  type: "error",
                  message: res.message
                });
              }, 2000);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    deleteLabel(item) {
      apiDeleteLinks({ _id: item._id }).then(res => {
        if (res.isSuccess) {
          this.onload();
        }
        setTimeout(() => {
          this.$message({
            type: "error",
            message: res.message
          });
        }, 2000);
      });
    },
    modify(item) {
      this.dialogVisible = true;
      this.form = {
        _id: item._id,
        name: item.name,
        url: item.url
      };
    }
  },
  mounted() {
    this.onload();
  }
};
</script>