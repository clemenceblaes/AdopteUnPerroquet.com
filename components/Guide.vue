<template>
  <v-container col-8>
    <h1>Guide de l'espèce</h1>
    <h2>Généralités</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc1 }}
    </p>
    <h2>Caractère</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc2 }}
    </p>
    <h2>Alimentation</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc3 }}
    </p>
    <h2>Mode de vie</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc4 }}
    </p>
    <div v-if="getParrotGuide.desc4x">
      <li v-for="desc in getParrotGuide.desc4x" :key="desc">
        {{ desc }}
      </li>
    </div>
    <h2>Les soins</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc5 }}
    </p>
    <div v-if="getParrotGuide.desc5x">
      <li v-for="desc in getParrotGuide.desc5x" :key="desc">
        {{ desc }}
      </li>
    </div>
    <h2>La reproduction</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc6 }}
    </p>

    <p class="mt-4 text-center">
      <v-btn class="return" color="#709255" text
        ><router-link to="/parrots"> Retour </router-link></v-btn
      >
    </p>
  </v-container>
</template>

<script>
import Store from "../store/modules/CurrentUsers.js";
export default {
  data() {
    return {};
  },
  computed: {
    getParrotGuide: function () {
      return Store.state.guide;
    },
  },
  beforeDestroy() {
    Store.mutations.RESET_GUIDE(Store.state.guide);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");

h1 {
  margin: 3% auto 2% auto;
  color: #709255;
  font-family: "Baloo Thambi 2", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
}

h2 {
  margin: 3% auto 2% auto;
  color: #709255;
  font-family: "Baloo Thambi 2", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
}

p,
li {
  font-family: "Baloo Thambi 2", sans-serif;
}

a {
  text-decoration: none;
  color: white !important;
  font-family: "Baloo Thambi 2", sans-serif;
}

.return {
  background-color: #709255;
}
</style>
