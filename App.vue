<template>
  <v-app>
    <navbar :app="this" class="mb-2"></navbar>

    <spinner v-if="loading"></spinner>
    <div v-else-if="initiated"><router-view :app="this" /></div>
    <v-footer class="mt-6" color="#709255" padless
      ><bottombar id="bottombar"
    /></v-footer>
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
</style>
