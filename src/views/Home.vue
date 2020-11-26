<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  setup() {
    provide("data", ref("父组件传递的值"));
    return {};
  },
  name: "Home",
  components: {
    HelloWorld
  }
});
</script>
