<template>
  <div class="header">
    <div class="avatar">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
    </div>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        管理员<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import storage from "@/util/storage";
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    //退出登录时要清理缓存信息 token等
    handleCommand(command) {
      switch (command) {
        case "loginout":
          this.$message({
            message: "退出成功",
            type: "success",
            duration: 800,
          });
          this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  .el-dropdown {
    float: right;
  }
  .avatar {
    float: right;
    margin-top: 8px;
    margin-left: 4px;
  }
}
</style>
