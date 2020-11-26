<template>
  <div>声明周期钩子测试</div>
  <h1>{{conut}}</h1>
  <button @click="add">+1</button>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onRenderTriggered,
  toRefs,
  reactive
} from "vue";

export default defineComponent({
  setup() {
    const data = toRefs(
      reactive({
        conut: 1,
        add() {
          this.conut++;
        }
      })
    );
    onBeforeMount(() => {
      console.log("挂载前", data.conut.value);
      if (data.conut.value === 1) {
        data.conut.value++;
      }
    });
    onMounted(() => {
      if (data.conut.value === 2) {
        console.log("挂载后", data.conut.value);
      }
    });
    onBeforeUpdate(() => {
      console.log("更新前", data.conut.value);
      if (data.conut.value === 2) {
        data.conut.value = 3;
      }
    });
    onUpdated(() => {
      console.log("更新后", data.conut.value);
      if (data.conut.value === 3) {
        data.conut.value = data.conut.value * 2;
      }
    });
    onBeforeUnmount(() => {
      console.log("销毁前", data.conut.value);
      if (data.conut.value === 6) {
        data.conut.value = 8;
      }
    });
    onUnmounted(() => {
      if (data.conut.value === 8) {
        data.conut.value = 10;
      }
      console.log("销毁后", data.conut.value);
    });
    onRenderTriggered(event => {
      console.log("delbug钩子", event);
      if (event.newValue === 6) {
        data.conut.value === 8;
        // 经测试delbug钩子为只读不能修改值
        console.log(event.target);
      }
    });

    return { ...data };
  }
});
</script>

<style scoped>
</style>
