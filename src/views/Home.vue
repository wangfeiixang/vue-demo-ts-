<template>
  <div class="home">
    <!-- <HelloWorld /> -->
    <my-input/>
    <show-num/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import MyInput from "@/components/MyInput.vue";
import ShowNum from "@/components/ShowNum.tsx";

@Component({
  components: {
    HelloWorld,
    MyInput,
    ShowNum
  }
})
export default class Home extends Vue {
  baseUrl: String = `hello`;
  list: number[] = [1, 2, 3];
  list1: Array<number> = [1, 2, 5];
  mounted() {
    // console.log(
    //   "mounted--",
    //   this.baseUrl,
    //   process.env,
    //   `list--`,
    //   this.list,
    //   this.list1
    // );
  }
}
</script>
