<template>
  <v-container col-8>
    <h1 class="mt-4 mb-8 text-center font-weight-bold">Guide de l'espèce</h1>
    <h2 class="mt-8 mb-4 text-center font-weight-bold">Généralités</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc1 }}
    </p>
    <h2 class="mt-8 mb-4 text-center font-weight-bold">Caractère</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc2 }}
    </p>
    <h2 class="mt-8 mb-4 text-center font-weight-bold">Alimentation</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc3 }}
    </p>
    <h2 class="mt-8 mb-4 text-center font-weight-bold">Mode de vie</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc4 }}
    </p>
    <div v-if="getParrotGuide.desc4x">
      <li v-for="desc in getParrotGuide.desc4x" :key="desc">
        {{ desc }}
      </li>
    </div>
    <h2 class="mt-8 mb-4 text-center font-weight-bold">Les soins</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc5 }}
    </p>
    <div v-if="getParrotGuide.desc5x">
      <li v-for="desc in getParrotGuide.desc5x" :key="desc">
        {{ desc }}
      </li>
    </div>
    <h2 class="mt-8 mb-4 text-center font-weight-bold">La reproduction</h2>
    <p v-if="getParrotGuide">
      {{ getParrotGuide.desc6 }}
    </p>

    <p class="mt-16 text-center">
      <v-btn class="return" text
        ><router-link to="/parrots"> Retour </router-link></v-btn
      >
    </p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getParrotGuide: function () {
      return this.$store.state.guide;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");
h1 {
  color: #709255;
  font-family: "Baloo Thambi 2", sans-serif;
  font-size: 3rem;
}
h2 {
  color: #709255;
  font-family: "Baloo Thambi 2", sans-serif;
  font-size: 2.5rem;
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
