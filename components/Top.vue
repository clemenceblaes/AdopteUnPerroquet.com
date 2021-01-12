<template>
  <v-app-bar app color="#1f1d1d" dark height="125">
    <div id="logo" class="d-flex">
      <v-img
        alt="AdopteUnPerroquet Logo"
        class="ml-2"
        contain
        src="https://zupimages.net/up/20/52/61is.jpg"
        transition="scale-transition"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn href="" target="_blank" text>
      <span id="auth" class="mr-2"
        ><router-link to="/auth">Se connecter</router-link></span
      >
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "top",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");

#logo {
  height: 150px;
  width: 400px;
  margin-top: -25px;
}

.v-application a {
  color: white;
  font-family: "Baloo Thambi 2", sans-serif;
  text-decoration: none;
}
</style>
