import { createStore } from 'vuex'
import axios from "axios"
export interface Idata { //data状态的接口
  banner: Array<unknown>;
  msg: string;
  success: boolean;
}
interface Idatalist { // 异步回来的数据接口
  data: {
    data: Idata;
  };
}
export interface Istore { //store 的接口
  data: Idata | null;
}
export const store = createStore<Istore>({
  state: {
    data: null
  },
  mutations: {
    add(state, value) {
      state.data = value
    },
  },
  actions: {
    async getData({ commit }) {
      const datalist: Idatalist = await axios.get("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
      commit("add", datalist.data)
    }
  }
})
