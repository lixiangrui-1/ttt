<template>
  <div>依赖注入</div>
  <div>{{data}}</div>
  <button @click="add">title</button>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";

export default defineComponent({
  setup() {
    // 上方组件通过provide("注入值的名字",ref(‘响应式的值’))
    // 下方组件通过const 变量 = inject(‘上方组件注入值得名字’,ref(‘默认的值’))
    // vue3的依赖注入可以实现组件间的响应式及上下组件都可以通信
    const data = inject("titleData", ref("A3"));
    const add = () => {
      data.value += "A3";
    };
    return { data, add };
  }
});
</script>

<style scoped>
</style>