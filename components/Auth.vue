<template>
  <v-container>
    <v-row>
      <form>
        <v-text-field
          v-model="username"
          label="Pseudonyme"
          required
          color="#709255"
        ></v-text-field>

        <v-text-field
          v-model="password"
          required
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          color="#709255"
          label="Mot de passe"
          @click:append="show = !show"
        ></v-text-field>

        <v-btn @click="onSubmit" class="mr-4 button">Se connecter</v-btn>
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
  name: "login",
  props: ["app"],
  data() {
    return {
      username: "",
      password: "",
      errors: [],
      show: false,
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];

      if (!this.username) {
        this.errors.push("Username is required.");
      }

      if (!this.password) {
        this.errors.push("Password is required.");
      }

      if (!this.errors.length) {
        const data = {
          username: this.username,
          password: this.password,
        };

        this.app.req
          .post("auth/login", data)
          .then((response) => {
            this.app.user = response.data;
            this.$router.push("/");
          })
          .catch((error) => {
            this.errors.push(error.response.data.error);
          });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");

@media screen and (min-width: 200px) and (max-width: 640px) {
  form {
    width: 75% !important;
    margin-top: 35% !important;
  }

  p {
    margin-top: 10% !important;
  }
}
form {
  width: 30%;
  margin: 15% auto auto auto;
  font-family: "Baloo Thambi 2", sans-serif;
}
p {
  margin: 5% auto auto auto;
  font-family: "Baloo Thambi 2", sans-serif;
  font-size: 1rem;
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
