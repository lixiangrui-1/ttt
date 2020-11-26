<template>
  <div>
    <input v-model="text" />
    <div>{{text}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, customRef } from "vue";
// 使用customRef 封装带防抖的v-model
function useDebouncedRef(value: any, delay = 200) {
  let timeout: number;
  // customRef接收两个参数分别是用于追踪的 track 与用于触发响应的 trigger，并返回一个一个带有 get 和 set 属性的对象
  return customRef((track, trigger) => {
    //customRef是一个类传入的value被内部的get,
    //set获取当调用track时track追踪代理对象即customRef类本身,
    //代理对象的属性即类中定义的get方法的别名_get,
    // 与值即传入的value
    return {
      get() {
        //当获取值时使用track追踪数据源并返回
        //track(this,get,value)
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          //当设置值时使用trigger通知数据源
          //trigger(this,set,value)
          trigger();
        }, delay);
      }
    };
  });
}

export default defineComponent({
  setup() {
    return {
      text: useDebouncedRef("hello")
    };
  }
});
</script>

<style scoped>
</style>