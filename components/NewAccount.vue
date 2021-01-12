<template>
  <v-stepper v-model="e1" id="stepper">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1" color="#709255">
        Création des identifiants de connexion
      </v-stepper-step>

      <v-divider> </v-divider>

      <v-stepper-step :complete="e1 > 2" step="2" color="#709255">
        Création de votre profil
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" color="#709255">
        Acceptation des conditions d'utilisation
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12 card" color="grey lighten-1" height="400px">
          <form>
            <v-text-field
              id="firstInput"
              label="Pseudonyme"
              required
              color="#709255"
            ></v-text-field>
            <v-text-field
              id="mail"
              label="E-mail"
              required
              color="#709255"
            ></v-text-field>
            <v-text-field
              id="mail2"
              label="Confirmez votre e-mail"
              required
              color="#709255"
            ></v-text-field>
            <v-text-field
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show3 ? 'text' : 'password'"
              name="input-10-2"
              label="Mot de passe"
              hint="Doit contenir au moins 8 caractères"
              value="Mot de passe"
              class="input-group--focused"
              @click:append="show3 = !show3"
              color="#709255"
            ></v-text-field>
            <v-text-field
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show3 ? 'text' : 'password'"
              name="input-10-2"
              label="Confirmez votre mot de passe"
              hint="Doit contenir au moins 8 caractères"
              value="Mot de passe"
              class="input-group--focused"
              @click:append="show3 = !show3"
              color="#709255"
            ></v-text-field></form
        ></v-card>

        <v-btn class="next" color="#709255" @click="e1 = 2"> Continuer </v-btn>

        <v-btn class="cancel" text
          ><router-link to="/"> Annuler </router-link></v-btn
        >
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="600px">
          <form>
            <p>Vous êtes :</p>
            <v-radio-group row>
              <v-radio
                label="Particulier"
                color="#709255"
                value="person"
              ></v-radio>
              <v-radio
                label="Association"
                color="#709255"
                value="association"
              ></v-radio>
              <v-radio
                label="Eleveur"
                color="#709255"
                value="breeder"
              ></v-radio>
            </v-radio-group>

            <v-text-field
              id="name"
              label="Nom"
              required
              color="#709255"
            ></v-text-field>
            <v-text-field
              id="firstname"
              label="Prenom"
              required
              color="#709255"
            ></v-text-field>
            <v-text-field
              id="associationName"
              label="Nom de l'association"
              color="#709255"
            ></v-text-field>
            <v-text-field
              id="adresse"
              label="Adresse"
              color="#709255"
            ></v-text-field>
            <v-text-field
              id="postalCode"
              label="Code Postal"
              color="#709255"
            ></v-text-field>
            <v-text-field
              id="city"
              label="Ville"
              color="#709255"
            ></v-text-field>
          </form>
        </v-card>

        <v-btn class="next" color="#709255" @click="e1 = 3"> Continuer </v-btn>

        <v-btn class="cancel" text
          ><router-link to="/"> Annuler </router-link></v-btn
        >
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="300px">
          <v-container>
            <p></p>
            <v-checkbox
              color="#709255"
              v-model="checkbox"
              label="J'accepte les termes du règlement"
            ></v-checkbox>
          </v-container>
        </v-card>

        <v-btn class="next" color="#709255" @click="e1 = 1">
          Créer le compte
        </v-btn>

        <v-btn class="cancel" text
          ><router-link to="/"> Annuler </router-link></v-btn
        >
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  name: "CreateAccount",
  data() {
    return {
      e1: 1,
      show3: false,
      checkbox: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Obligatoire",
        min: (v) => v.length >= 8 || "Minimum 8 caractères",
      },
    };
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");

form {
  width: 35%;
  margin: 20px auto;
  padding-top: 5%;
}

.card {
  height: 200px;
  width: 55%;
  margin: auto;
}
.next {
  color: white;
}

a {
  color: #709255 !important;
  text-decoration: none;
}

.v-application .grey.lighten-1 {
  background-color: #dfdfdf !important;
}

#stepper {
  width: 75%;
  margin: 2% auto auto auto;
  font-family: "Baloo Thambi 2", sans-serif;
}
</style>
