<template>
  <v-footer color="#709255" padless>
    <v-row class="bottomMenu" justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="black lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>&copy; AdopteUnPerroquet.com</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Bottom",
  data: () => ({
    links: [
      "Accueil",
      "A propos de nous",
      "Législation",
      "Mentions légales",
      "Blog",
      "Nous contacter",
    ],
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");

.bottomMenu {
  font-family: "Baloo Thambi 2", sans-serif;
}
</style>
