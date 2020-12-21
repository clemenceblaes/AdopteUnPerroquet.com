<template>
  <v-app>
    <Top />
    <v-main>
      <router-view />
    </v-main>

    <Bottom />
  </v-app>
</template>

<script>
import Top from "./components/Top.vue";
import Bottom from "./components/Bottom.vue";

export default {
  name: "App",

  components: {
    Bottom,
    Top,
  },
};
</script>
