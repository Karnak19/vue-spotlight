<template>
  <header>
    <nav>
      <ul>
        <li v-for="r in state" :key="r.id">
          <router-link :to="r.path">{{ r.path }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { cleanRoutes } from "@/router";

export const state = cleanRoutes;
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  list-style: none;
}

li {
  min-width: 50px;
}
</style>
