<template>
  <div id="nav1">
    <router-link active-class="ac" exact to="/A/B">A2</router-link>|
    <router-link active-class="ac" exact to="/A/C">A3</router-link>
  </div>
  <h1>watch属性检测</h1>
  <button @click="title">title</button>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref, watch, reactive, provide } from "vue";

export default defineComponent({
  setup() {
    const data = ref("hello");
    provide("titleData", data);
    const value = reactive({
      value: 1
    });
    const title = () => {
      data.value += value.value;
      value.value++;
    };
    // 属性检测 可以监控多个值入参形式为数组 单值直接传
    // 当属性检测监控响应式对象reactive的某个值时需要以函数返回值的形式传人否则响应式对象会失去活性
    watch([data, () => value.value], (newValue, oldValue) => {
      console.log("旧值:" + oldValue, "新值:" + newValue);
      document.title = data.value + value.value;
    });
    return {
      title,
      data,
      value
    };
  }
});
</script>

<style scoped>
#nav1 .ac {
  color: #42b983;
}
</style>