<template>
  <div class="article">
    <el-card>
      <el-button type="promary" @click="add">新增</el-button>
    </el-card>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="文章标题" align="center"></el-table-column>
      <el-table-column prop="isAuthor" label="原创" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.isAuthor">是</span>
          <span v-else>否</span>
        </template>
      </el-table-column>
      <el-table-column prop="labels" label="标签名称" align="center">
        <template slot-scope="scope">
          <el-tag type="success" v-for="(item,index) in scope.row.labels" :key="index">{{item}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="置顶" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.isTop">是</span>
          <span v-else>否</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="上架" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.isPublish">是</span>
          <span v-else>否</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="imgUrl" label="配图">
        <template slot-scope="scope">
          <img :src="scope.row.imgUrl" alt />
        </template>
      </el-table-column>
      <el-table-column align="center" prop="content" label="内容">
        <template slot-scope="scope">
          <span>{{scope.row.content}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="createDate" label="编写日期">
        <template slot-scope="scope">
          <span>{{scope.row.createDate}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-link @click="publish(scope.row)" type="priamry" size="small">上架</el-link>
          <el-link @click="setTop(scope.row)" type="priamry" size="small">置顶</el-link>
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
  </div>
</template>
<script>
import { apiQueryArticle, apiModifyArticle } from "@/api/article";
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      pageNo: 1,
      pageSize: 10
    };
  },
  methods: {
    onload() {
      const { pageSize, pageNo } = this;
      apiQueryArticle({ pageSize, pageNo }).then(res => {
        if (res.isSuccess) {
          this.tableData = res.data;
          this.total = res.total;
        }
      });
    },
    add() {
      this.$router.replace("/Home/AddAcrticle");
    },
    publish(item) {
      const { _id } = item;
      apiModifyArticle({ _id, isPublish: 1 }).then(res => {
        if (res.isSuccess) {
          this.$message({
            type: "success",
            message: res.message
          });
          this.onload();
        } else {
          this.$message({
            type: "warning",
            message: res.message
          });
        }
      });
    },
    setTop(item) {
       const { _id } = item;
      apiModifyArticle({ _id, isTop: 1 }).then(res => {
        if (res.isSuccess) {
          this.$message({
            type: "success",
            message: res.message
          });
          this.onload();
        } else {
          this.$message({
            type: "warning",
            message: res.message
          });
        }
      });
    },
    deleteLabel(item) {
      const { _id } = item;
      apiModifyArticle({ _id, isPublish: 0 }).then(res => {
        if (res.isSuccess) {
          this.$message({
            type: "success",
            message: res.message
          });
          this.onload();
        } else {
          this.$message({
            type: "warning",
            message: res.message
          });
        }
      });
    },
    modify(item) {
      console.log(item);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.onload();
    },
    handleCurrentChange(val) {
      this.pageNo = val;
      this.onload();
    }
  },
  mounted() {
    this.onload();
  }
};
</script>
<style lang="less" scoped>
.el-pagination {
  margin-top: 15px;
  text-align: right;
}
</style>