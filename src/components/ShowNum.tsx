require("./ShowNum.scss");
import Vue, { CreateElement } from "vue";
import Component from "vue-class-component";
// import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Component
export default class ShowNum extends Vue {
  msg: string = "加入购物车";

  clickFun(): void {
    // console.log("ShowNum--msg--", this.msg);
  }

  plus(): void {
    this.$store.commit("addNum");
  }

  reduce(): void {
    this.$store.commit("reduceNum");
  }

  render(h: CreateElement) {
    return (
      <div class="show-input">
        <p>ShowNum组件</p>
        <el-button onClick={this.plus}>+</el-button>
        <el-button onClick={this.reduce}>-</el-button>
      </div>
    );
  }
}
