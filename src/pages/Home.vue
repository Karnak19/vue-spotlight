<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>{{ path }}</h1>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {},
  setup() {
    const route = useRoute();
    const path = ref(route.path);

    watch(
      () => route.path,
      () => (path.value = route.path)
    );
    return {
      path,
    };
  },
};
</script>

<style></style>
