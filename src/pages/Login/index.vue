<template>
  <div class="container">
    <div>
      <el-button type="primary" plain @click="handleRouter">登录</el-button>
    </div>
  </div>
</template>

<script>
import ReqApi from "../../util/ReqApi";
import storage from "@/util/storage";
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    handleRouter() {
      ReqApi.login(
        { username: 13000000008, password: 123456 },
        ({ data, resCode } = res) => {
          if (resCode == "0000") {
            console.log("data=======", data);
            storage.cacheLoginUserToken("lyToken", data.token);
            storage.cacheLoginUser("lyUserInfo", JSON.stringify(data));
            this.$message({
              message: "登录成功",
              type: "success",
              duration: 800,
            });
            this.$router.push("/home");
          }
        }
      );
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  padding-top: 60px;
}
</style>
