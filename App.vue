<template>
  <v-app>
    <navbar :app="this" class="mb-2"></navbar>

    <spinner v-if="loading"></spinner>

    <v-main v-else-if="initiated"><router-view :app="this" /></v-main>
    <Bottombar />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Bottombar from "./components/Bottombar.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Bottombar,
  },
  data() {
    return {
      user: null,
      loading: false,
      initiated: false,
      req: axios.create({
        baseUrl: BASE_URL,
      }),
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.loading = true;

      this.req.get("auth/init").then((response) => {
        this.user = response.data.user;
        this.loading = false;
        this.initiated = true;
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");

.v-application {
  font-family: "Baloo Thambi 2", sans-serif;
}
</style>
