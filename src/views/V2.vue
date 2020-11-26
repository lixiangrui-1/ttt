<template>
  <h1>自定义useURL</h1>
  <div class="aaa" v-if="loaded">{{result}}</div>
  <div class="bbb" v-if="loading">loading...</div>
  <div>{{error}}</div>
</template>

<script lang="ts">
interface Idata {
  success: string;
  msg: string;
  banner: Array<{ title: string; content: string; img: string }>;
}
import { defineComponent, watchEffect } from "vue";
import useURL from "../hooks/useURL";
export default defineComponent({
  setup() {
    const data = useURL<Idata>(
      "http://iwenwiki.com/api/blueberrypai/getIndexBanner.php"
    );
    watchEffect(() => {
      console.log(data.result.value?.banner);
    });
    return {
      ...data
    };
  }
});
</script>

<style scoped>
.aaa {
  border: 1px solid #222;
  width: 1000px;
  height: 300px;
  margin: auto;
}
.bbb {
  border: 1px solid #222;
  width: 100px;
  height: 300px;
  margin: auto;
}
</style>