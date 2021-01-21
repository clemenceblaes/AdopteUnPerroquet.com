<template>
  <v-container fluid>
    <h1>Nos perroquets à l'adoption</h1>
    <v-container class="d-flex cards" v-if="getParrots">
      <cards
        class="mx-auto"
        max-width="400"
        :id="parrot.id"
        v-for="parrot in getParrots"
        :key="parrot.name"
      >
        <template v-slot:name=""> {{ parrot.name }} </template>
        <template v-slot:desc1=""> {{ parrot.desc1 }} </template>
        <template v-slot:desc2=""> {{ parrot.desc2 }} </template>
        <template v-if="parrot.annexe" v-slot:annexe=""> {{ parrot.annexe }} </template>
        <template v-slot:btn1=""
          ><v-btn color="#709255" text
            ><router-link :to="parrot.router">
              En savoir plus...
            </router-link></v-btn
          ></template
        >
        <template v-slot:btn2=""
          ><v-btn
            color="#709255"
            text
            v-on:click.native="getGuide(parrot.guide)"
            ><router-link to="/guide"> Guide </router-link></v-btn
          ></template
        >
      </cards>
    </v-container>
  </v-container>
</template>

<script>
import Cards from "../Cards/MenuCards";
import Store from "../../store/modules/CurrentUsers.js";

export default {
  name: "parrotType",
  components: {
    Cards,
  },
  data() {
    return {};
  },
  computed: {
    getParrots() {
      switch (Store.state.sizeChoice) {
        case "/littleParrots":
          return Store.state.littleParrots;
        case "/mediumParrots":
          return Store.state.mediumParrots;
        case "/largeParrots":
          return Store.state.largeParrots;
      }
    },
  },
  methods: {
    getGuide(parrotID) {
      Store.state.guide = parrotID;
    },
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

a {
  text-decoration: none;
  color: #709255 !important;
}
</style>


