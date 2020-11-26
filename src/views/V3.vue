<template>
  <div>x:{{x}}---y:{{y}}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useMP from "../hooks/useMouPosi";
export default defineComponent({
  setup() {
    const { x, y } = useMP();
    return { x, y };
  }
});
</script>

<style scoped>
</style>