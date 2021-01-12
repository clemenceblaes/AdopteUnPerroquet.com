<template>
  <v-container>
    <v-row>
      <form>
        <v-text-field
          v-model="pseudonyme"
          label="Pseudonyme"
          required
          color="#709255"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Mot de passe"
          required
          color="#709255"
        ></v-text-field>
        <v-checkbox label="Se souvenir de moi" color="#709255"></v-checkbox>

        <v-btn class="mr-4 button"> Se connecter </v-btn>
      </form>
    </v-row>
    <v-row class="mt-10 justify-center">
      <p class="text-center" id="newAccount">
        Vous n'avez pas encore de compte ? <br />
        <router-link to="/newAccount">Créer un compte</router-link>
      </p></v-row
    >
  </v-container>
</template>

<script>
export default {
  name: "reg",
  data() {
    return {
      pseudonyme: "Nyumélia",
      password: "Test",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");

form {
  width: 20%;
  margin: 5% auto auto auto;
  font-family: "Baloo Thambi 2", sans-serif;
}

p {
  font-family: "Baloo Thambi 2", sans-serif;
}

a {
  text-decoration: none;
  color: #709255 !important;
}

.button {
  width: 100%;
  font-family: "Baloo Thambi 2", sans-serif;
}
</style>
