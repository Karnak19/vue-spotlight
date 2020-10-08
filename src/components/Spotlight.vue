<template>
  <div class="spotlight active">
    <div class="spotlight-bar">
      <input type="text" v-model="input" @blur="blur" />
      <ul class="spotlight-suggestions">
        <li>{{ selectedSuggestion }}</li>
        <li v-for="r in suggestions" :key="r.id">
          <router-link :to="r.path">{{ r.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { cleanRoutes } from "@/router";
import { ref, watch } from "vue";

export default {
  props: {
    blur: Function,
  },
  setup() {
    // TODO: Setup focus on input
    const input = ref("");
    const suggestions = ref([]);
    const selectedSuggestion = ref("");

    const filterSuggest = () => {
      const filtered = cleanRoutes.value.filter((el) => {
        return el.name.includes(input.value);
      });
      return filtered;
    };

    watch(
      () => input.value,
      () => {
        suggestions.value = filterSuggest();
        selectedSuggestion.value = suggestions.value[0];
      }
    );

    return { input, suggestions, routes: cleanRoutes, selectedSuggestion };
  },
};
</script>

<style>
.spotlight {
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.spotlight.active {
  opacity: 1;
  pointer-events: auto;
}

.spotlight-bar {
  position: relative;
  width: 350px;
  background: whitesmoke;
  border-radius: 5px;
  padding: 5px;
}

.spotlight-bar input {
  width: 100%;
  padding: 10px;
}

.spotlight-suggestions {
  position: absolute;
  top: 100%;
  background: whitesmoke;
  left: 0;
  right: 0;
  margin: -5px 0 0 0;
  padding: 5px 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.spotlight-suggestions li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.spotlight-suggestions a {
  display: block;
  text-decoration: none;
  padding: 10px 15px;
  color: inherit;
}

.spotlight-suggestions li:hover a {
  background: rgb(194, 194, 194);
}

.spotlight-suggestions li.active a {
  background: rgb(161, 161, 161);
}
</style>
