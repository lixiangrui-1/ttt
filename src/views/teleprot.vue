<template>
  <!-- teleport 可以指定组件挂载在那个html跟节点上 -->
  <teleport to="#model" v-if="isopen">
    <div class="content">
      <slot>123</slot>
      <button @click="cloes">关闭</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // props 类型定义与vue2相同
  props: {
    isopen: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  // emits 由于setup没有this 所以需要用emits先声明获取什么事件
  emits: {
    open: null
  },
  // 通过content上下文拿到emit/attrs/slots
  setup(props, content) {
    const cloes = () => {
      content.emit("open");
    };
    return {
      cloes
    };
  }
});
</script>

<style scoped>
.content {
  width: 300px;
  height: 100px;
  position: absolute;
  top: 0;
  left: calc(50% - 150px);
  animation: weiyi 0.3s;
  animation-fill-mode: forwards;
  background: #ccc;
}
@keyframes weiyi {
  0% {
    top: 50px;
  }
  100% {
    top: 150px;
  }
}
</style>