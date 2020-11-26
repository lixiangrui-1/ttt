<template>
  <div ref="root">
    <div :key="i" :ref="el => { divs[i] = el }" v-for="(item, i) in list">{{ item }}</div>
    <div :ref="el =>{div = el}" @click="add">1213</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeUpdate,
  reactive,
  onMounted,
  Ref,
  onUpdated
} from "vue";

export default defineComponent({
  setup() {
    // ts中 获取真实节点后类型推论会失效需要联合类型 Ref 为vue3定义的响应式api的接口
    const root: Element | Ref = ref(null);
    const list = reactive([1, 2, 3]);
    const divs = ref<Element[]>([]);
    const div = ref(null);
    // 确保在每次变更之前重置引用
    onBeforeUpdate(() => {
      divs.value = [];
      console.log(divs.value);
    });
    onUpdated(() => {
      console.log(divs.value);
    });
    onMounted(() => {
      // 在渲染完成后, 这个 div DOM 会被赋值给 root ref 对象
      divs.value.map(item => {
        console.log(item);
      }); // <div/>
      console.log(div.value);
    });
    return {
      root,
      list,
      divs,
      div,
      add: () => {
        list.push(123);
      }
    };
  }
});
</script>

<style scoped>
</style>