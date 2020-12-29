<template>
  <v-container fluid>
    <v-row>
      <Menu />
    </v-row>
    <v-row id="carousel">
      <Carousel />
    </v-row>
  </v-container>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Menu,
    Carousel,
  },
};
</script>

<style scoped>
#carousel {
  margin-top: 1.3%;
}
</style>


