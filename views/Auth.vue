<template>
  <v-container fluid>
    <v-row><Menu /></v-row>
    <Auth />
    <p id="newAccount">
      Vous n'avez pas encore de compte ? <br />
      <router-link to="/newAccount">Créer un compte</router-link>
    </p>
  </v-container>
</template>

<script>
import Auth from "@/components/Auth.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "Register",
  components: {
    Auth,
    Menu,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");

p {
  margin-top: 5%;
  color: #1f1d1d;
  font-family: "Baloo Thambi 2", sans-serif;
  text-align: center;
}

.v-application a {
  color: #709255;
}

#newAccount {
  margin-bottom: 4%;
}
</style>