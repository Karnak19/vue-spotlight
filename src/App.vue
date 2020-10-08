<template>
  <Navbar />
  <router-view></router-view>
  <Spotlight v-if="isSpotlightActive" :blur="blur" />
</template>

<script>
import { ref } from "vue";
import ctrlK from "@/hooks/ctrlK";
import Navbar from "@/components/Navbar";
import Spotlight from "@/components/Spotlight";
export default {
  name: "App",
  components: {
    Navbar,
    Spotlight,
  },
  setup() {
    const isSpotlightActive = ref(false);

    ctrlK(isSpotlightActive);

    const blur = () => {
      setTimeout(() => {
        isSpotlightActive.value = false;
      }, 100);
    };

    return { isSpotlightActive, blur };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
