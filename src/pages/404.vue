<template>
  <div class="container">
    <div class="text">页面走丢了~</div>
    <el-button type="success" round @click="handleBackHome">返回首页</el-button>
  </div>
</template>

<script>
export default {
  name: "404",
  data() {
    return {};
  },
  methods: {
    handleBackHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  padding-top: 60px;
  .text {
    margin-bottom: 20px;
  }
}
</style>
