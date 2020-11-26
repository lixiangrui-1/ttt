
<template>
  <!-- 
    父组件通过系统内置Suspense组件
    他内部存在两个具名插槽
    <Suspense>
        Promise完成状态展示异步结果(可以展示多个组件)
      <template #default>
        <Async></Async>
      </template>
      Promise等待状态展示默认
      <template #fallback>
        <h1>loading</h1>
      </template>
    </Suspense>
    捕获错误使用
    const Err = ref(null)
    onErrorCaptured((e)=>{
      Err.value = e
      return true
    })
    然后将Err方法标签或打印展示
  -->
  <div>{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Idata {
  data: number;
}

export default defineComponent({
  setup() {
    //异步子组件setup返回Promise等待状态
    return new Promise<Idata>(res => {
      setTimeout(() => {
        return res({
          data: 123
        });
      }, 3000);
    });
  }
});
</script>

<style scoped>
</style>