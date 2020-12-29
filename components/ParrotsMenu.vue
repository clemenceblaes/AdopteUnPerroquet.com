<template>
  <v-container class="d-flex cards">
    <v-card
      class="mx-auto"
      max-width="400"
      v-for="parrot in getParrots"
      :key="parrot.name"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        width="300px"
        v-bind:id="parrot.id"
      >
        <v-card-title class="title">{{ parrot.name }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        {{ parrot.desc1 }}
      </v-card-subtitle>

      <v-card-text class="text--primary desc2">
        <div>{{ parrot.desc2 }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="#709255" text> En savoir plus... </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "littleParrots",
  computed: {
    getParrots() {
      return this.$store.state.parrotsSize;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");

.cards {
  font-family: "Baloo Thambi 2", sans-serif;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
}
.desc2 {
  max-width: 300px;
}

#little {
  background: url("https://www.windycityparrot.com/wordpress/wp-content/uploads/60355079_s.jpg");
  background-size: cover;
}

#medium {
  background: url("https://petsoid.com/wp-content/uploads/2019/12/Soloman-Islands-Eclectus-pair.jpg");
  background-size: cover;
}

#large {
  background: url("https://jardinage.lemonde.fr/images/dossiers/2019-10/cacatoes-1-094044.jpg");
  background-size: cover;
}
</style>