<template>
  <div class="layout">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px"> <Sd /></el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header><Hd /></el-header>
        <!-- 主页面 -->
        <el-main>
          <el-breadcrumb>
            <el-breadcrumb-item
              v-for="(item, index) in $route.meta.bread"
              :key="index"
              >{{ item }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Hd from "@/components/Header";
import Sd from "@/components/Sider";
export default {
  name: "Main",
  components: {
    Hd,
    Sd,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  /* 吸顶 */
  position: sticky;
  top: 0px;
  z-index: 999;
}

.el-aside {
  /* background-color: #545c64; */
  /* color: #333; */
  height: 100vh;
  position: sticky;
  /* 吸顶 */
  top: 0px;
  z-index: 999;
  overflow-x: hidden;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-breadcrumb {
  font-size: 14px;
  line-height: 1;
  margin-bottom: 20px;
}
</style>
