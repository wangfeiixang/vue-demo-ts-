<template>
  <div class="layout-input">
    <p>MyInput组件</p>
    <el-button class="input-btn" size="small" type="primary" @click="plus">+</el-button>
    <el-button class="input-btn" size="small" @click="reduce">-</el-button>
    <h1>
      数量:
      <span>Getter:{{totalSum}}--State:{{totalNum}}</span>
    </h1>
  </div>
</template>

<script lang="ts">
// import { mapGetters } from "vuex";
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: 0 })
  num!: number;
  sum: number = 0;
  // 计算属性
  get numFun(): number {
    let num: number = this.num;
    num++;
    return num;
  }

  @State(state => state.totalNum)
  totalNum: any;
  @Getter("totalSum") totalSum: any;

  // get getSum(): number {
  //   console.log("getSum--", this.$store.state);
  //   // return this.$store.state.
  // }

  // 数量增加
  plus(): void {
    // this.sum++;
    this.$store.commit("addNum");
  }
  // 数量减少
  reduce(): void {
    this.$store.commit("reduceNum");
  }
  mounted() {
    // console.log("mounted--", this.totalSum, "state--", this.totalNum);
  }
}
</script>

<style scoped lang="scss">
.layout-input {
  h1 {
    span {
      color: #1fa8e0;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
<style lang="scss">
.layout-input {
  .el-button--small {
    padding: 5px 8px;
  }
}
</style>
