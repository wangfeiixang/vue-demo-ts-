<script lang="tsx">
import Vue, { CreateElement } from "vue";
import Component from "vue-class-component";
@Component
export default class FilterItem extends Vue {
  msg: string = "22222----";
  callClick(): string {
    // console.log("callClick--", this.msg);
    return this.msg;
  }
  render(h: CreateElement) {
    return (
      <div>
        <p onClick={this.callClick}>{this.msg}</p>
        <p class="layout-color">1111--- {this.msg}</p>
      </div>
    );
  }
}
</script>
<style lang="scss" scoped>
.layout-color {
  color: skyblue;
}
</style>
