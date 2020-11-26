<template>
  <div>ref-reactive测试</div>
  <div>{{conut}}--{{double}}</div>
  <button @click="inscrase">+1</button>
  <button @click="datalist">99</button>
  <div>{{data1}}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, inject, ref } from "vue";
interface Idata {
  conut: { name: string; age: number };
  inscrase: () => void;
  double: number;
}

export default defineComponent({
  setup() {
    // vue3 新增响应式对象可以将一系列方法和属性声明在reactive中返回出去
    const data: Idata = reactive({
      conut: { name: "li", age: 18 },
      inscrase: () => {
        data.conut.age++;
      },
      // 使用ts时reactive中使用计算属性会让ts中的类型推论失效需要定义接口定义类型
      double: computed(() => {
        return data.conut.age * 2;
      })
    });
    const data1 = inject("data", ref("默认值"));
    const datalist = () => {
      data1.value = data1.value + "子组件加的值";
    };
    // toRefs 当直接结构reactive对象后响应式会失去活性需要使用toRefs重新赋予对象响应式
    // 活性后在结构导出
    const datas = toRefs(data);
    return {
      ...datas,
      datalist,
      data1
    };
  }
});
</script>

<style scoped>
</style>


