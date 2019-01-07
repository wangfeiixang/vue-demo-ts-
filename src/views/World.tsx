import Vue, { CreateElement } from "vue";
import Component from "vue-class-component";

@Component
export default class World extends Vue {
  msg: string = "111111";

  clickFun(): void {
    this.msg = "22222";
    // console.log("world--msg--", this.msg);
  }

  render(h: CreateElement) {
    return (
      <div>
        <p>This is rendered via TSX</p>
        <p onClick={this.clickFun}>{this.msg}</p>
      </div>
    );
  }
}
