<template>
  <div>
    <List></List>
    <Suspense>
      <template #default>
        <Async></Async>
      </template>
      <template #fallback>
        <h1>loading</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Async from "./async.vue";
import List from "@/components/list.vue";

export default defineComponent({
  components: {
    Async,
    List
  },
  setup() {
    return {
      // list: data
    };
  }
});
</script>

<style scoped>
</style>