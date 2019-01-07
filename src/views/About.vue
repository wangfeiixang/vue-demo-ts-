<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <my-component></my-component> -->
    <my-world></my-world>
    <filter-item></filter-item>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// import MyComponent from "./Click";
import MyWorld from "./World";
import FilterItem from "./Pcomponents.vue";

@Component({
  components: {
    // MyComponent,
    MyWorld,
    FilterItem
  }
})
export default class About extends Vue {
  mounted() {
    // console.log("about--mounted");
  }
}
</script>
