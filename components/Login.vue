<template>
  <v-container>
    <v-row>
      <v-col sm="10" md="3" class="m-auto">
        <form class="mt-10 m-auto" width="30%">
          <div class="alert alert-danger" v-if="errors.length">
            <ul class="mb-0">
              <li v-for="(error, index) in errors" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>
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
          <v-col sm="12" md="12" class="text-center">
            <v-btn @click="onSubmit">Se connecter</v-btn></v-col
          >
        </form>
      </v-col>
    </v-row>
    <v-row class="mt-10 justify-center">
      <p class="text-center" id="newAccount">
        Vous n'avez pas encore de compte ? <br />
        <router-link to="/newAccount" class="text-decoration-none"
          >Créer un compte</router-link
        >
      </p>
    </v-row>
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
        this.errors.push("Veuillez rentrer votre pseudonyme.");
      }

      if (!this.password) {
        this.errors.push("Le mot de passe est obligatoire.");
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
p {
  font-size: 1rem;
}
a {
  color: #709255 !important;
}
</style>
 



