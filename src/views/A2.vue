<template>
  <div>watchEffect追踪检测</div>
  <div>{{count}}</div>
</template>

<script lang="ts">
import { defineComponent, readonly, ref, watchEffect } from "vue";

export default defineComponent({
  setup() {
    const count = ref({});
    // 声明只读属性
    const conut = readonly(count);
    // watchEffect 可以追踪检测某一个值
    watchEffect(() => console.log(count.value));
    // 也可以检测异步
    watchEffect(async () => {
      count.value = await fetch(
        "http://iwenwiki.com/api/blueberrypai/getIndexBanner.php"
      ).then(res => {
        return res.json(); //res.json转json是异步还需要then进行捕获
      });
    });
    return {
      count,
      conut
    };
  }
});
</script>

<style scoped>
</style>