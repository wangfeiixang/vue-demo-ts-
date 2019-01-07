<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <router-view></router-view>
      <!-- <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p> -->
      <!-- <el-button>el-button</el-button>
      <el-button
        type="text"
        @click="open"
      >点击打开 Message Box</el-button> -->
    </div>
    <!-- <HelloWorld /> -->
    <!-- <a
      href="https://github.com/nuxt/nuxt.js"
      target="_blank"
      class="button--grey"
    >GitHub</a> -->
    <!-- <i-control-layout
      ref="controls"
      :btn-col="3"
      :toolbar="treeToolbar"
      more-btn-type="default"
    /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  methods: {
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
