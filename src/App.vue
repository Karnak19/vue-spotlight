<template>
  <router-view></router-view>
  <Spotlight v-if="isActive" :blur="blur" :routes="routes" />
</template>

<script>
import useSpotlight from '@/hooks/useSpotlight';
import Spotlight from '@/components/Spotlight';
import { routes } from '@/router';

export default {
  name: 'App',
  components: {
    Spotlight,
  },
  setup() {
    const { isActive, blur, keyboardShortcut } = useSpotlight();

    keyboardShortcut();

    return { isActive, blur, routes };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1b2631;
}
</style>
