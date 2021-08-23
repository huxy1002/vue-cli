<template>
  <div @click="handleApi">首页</div>
</template>

<script>
import storage from "../../util/storage";
import ReqApi from '../../util/ReqApi'
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    handleApi() {
       console.log(localStorage.getItem('lyToken'))
    },
  },
};
</script>

<style scoped>
</style>
