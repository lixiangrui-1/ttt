<template>
  <div>
    <div id="nav">
      <router-link active-class="ac" exact to="/">Home</router-link>|
      <router-link active-class="ac" exact to="/about">About</router-link>|
      <router-link active-class="ac" exact to="/A">A1</router-link>|
      <router-link active-class="ac" exact to="/666">V1</router-link>|
      <router-link active-class="ac" exact to="/777">V2</router-link>|
      <router-link active-class="ac" exact to="/888">V3</router-link>|
      <router-link active-class="ac" exact to="/999">V4</router-link>|
      <router-link active-class="ac" exact to="/000">V5</router-link>
      <router-link active-class="ac" exact to="/111">V11</router-link>
    </div>
    <router-view />
    <Model :isopen="isopen" @open="open">
      <input v-model="value" />
    </Model>
    <button @click="()=>isopen=!isopen">弹出层</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUpdated, ref } from "vue";
import Model from "./views/teleprot.vue";
export default defineComponent({
  components: {
    Model
  },
  setup() {
    const isopen = ref(false);
    const value = ref("");
    const open = () => {
      isopen.value = !isopen.value;
    };
    onUpdated(() => {
      console.log(value.value);
    });
    return {
      isopen,
      open,
      value
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav .ac {
  color: #42b983;
}
</style>
