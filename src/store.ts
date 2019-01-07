import Vue from "vue";
import Vuex from "vuex";

import { MessageBox } from "element-ui";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    totalNum: 0
  },
  getters: {
    totalSum: state => state.totalNum
  },
  mutations: {
    addNum(state): void {
      state.totalNum++;
    },
    reduceNum(state): void {
      if (state.totalNum <= 0) {
        state.totalNum = 0;
        MessageBox.alert("已经是最小了啊", "", {
          confirmButtonText: "确定"
        });
      } else {
        state.totalNum--;
      }
    }
  },
  actions: {}
});
