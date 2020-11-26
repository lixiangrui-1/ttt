<template>
  <div>
    <pre></pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { useStore } from "vuex";
import { Istore } from "../store/index";
export default defineComponent({
  setup() {
    const store = useStore<Istore>();
    watchEffect(async () => {
      await store.dispatch("getData");
      console.log(store.state.data?.banner);
    });
    return {};
  }
});
</script>

<style scoped>
</style>