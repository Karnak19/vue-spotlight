<template>
  <Navbar />
  <router-view></router-view>
  <Spotlight v-if="isActive" :blur="blur" />
</template>

<script>
import useSpotlight from '@/hooks/useSpotlight';
import Navbar from '@/components/Navbar';
import Spotlight from '@/components/Spotlight';
export default {
  name: 'App',
  components: {
    Navbar,
    Spotlight,
  },
  setup() {
    const { isActive, blur, keyboardShortcut } = useSpotlight();

    keyboardShortcut();

    return { isActive, blur };
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
  color: #2c3e50;
}
</style>
