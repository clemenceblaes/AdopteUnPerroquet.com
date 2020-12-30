<template>
  <v-container class="d-flex cards">
    <v-card
      class="mx-auto"
      max-width="400"
      v-for="parrot in getLittleParrots"
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

      <v-card-actions class="buttons">
        <v-btn color="#709255" text
          ><router-link v-bind:to="parrot.router">
            Voir plus...</router-link
          ></v-btn
        >
        <v-btn color="#709255" text
          ><router-link v-bind:to="parrot.router"> Guide</router-link></v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "LittleParrotsList",
  computed: {
    getLittleParrots() {
      return this.$store.state.littleParrots;
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
  font-size: 1.5rem !important;
  font-weight: 700;
  font-family: "Baloo Thambi 2", sans-serif !important;
}

.desc2 {
  max-width: 300px;
}

#perruches {
  background: url("https://www.beaphar.com/portal/web/8/content/images/French_Content/header_article_perruche.jpg");
  background-size: cover;
}

#calopsittes {
  background: url("https://www.dezonnegloed.be/src/Frontend/Files/Media/Images/400x300/2019%2009%20Valkparkiet%20-%20Bali%2003%20-%20vierkant.png");
  background-size: cover;
}

#youyous {
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Mohrenkopfpapagei1.jpg/290px-Mohrenkopfpapagei1.jpg");
  background-size: cover;
}

#conures {
  background: url("https://redcdn.net/anipassion/ow_userfiles/plugins/animal/breed_image_58f8b0dd70dc5.jpg");
  background-size: cover;
}

#touis {
  background: url("https://anipassion.com/ow_userfiles/plugins/base/27-toui-celeste.png");
  background-size: cover;
}

a {
  text-decoration: none;
  color: #709255;
}
</style>