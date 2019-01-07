// import { Vue } from "vue-property-decorator";
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  template: '<button @click="onClick">Click!</button>'
})
export default class MyComponent extends Vue {
  // 初始数据可以直接声明为实例的属性
  message: string = "Hello!";
  // 组件方法也可以直接声明为实例的方法
  onClick(): void {
    console.log("message--", this.message);
    // window.alert(message);
  }
}
