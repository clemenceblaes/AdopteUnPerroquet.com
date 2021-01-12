<template>
  <v-app>
    <Top />
    <v-main>
      <Menu />
      <router-view />
    </v-main>
    <Bottom />
  </v-app>
</template>

<script>
import Top from "./components/Top.vue";
import Menu from "./components/Menu.vue";
import Bottom from "./components/Bottom.vue";

export default {
  components: {
    Bottom,
    Menu,
    Top,
  },
};
</script>
