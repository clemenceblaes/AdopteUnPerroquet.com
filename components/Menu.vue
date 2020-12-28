<template>
  <v-app-bar dense dark color="#709255" class="pa-0 menu">
    <v-row>
      <v-col class="d-flex justify-space-around">
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-col>
      <v-col cols="2" class="text-center"
        ><router-link to="/"> Acceuil</router-link>
      </v-col>
      <v-col cols="2" class="text-center"
        ><router-link to="/parrots">Les perroquets</router-link></v-col
      >
      <v-col cols="2" class="text-center"
        ><router-link to="/"> Législation</router-link></v-col
      >
      <v-col cols="2" class="text-center"
        ><router-link to="/"> Mon Compte</router-link></v-col
      >
      <v-col class="d-flex justify-space-around">
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-col>
      <router-view />
    </v-row>
  </v-app-bar>
</template>


<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
.v-application a {
  color: white;
  font-size: 24px;
  text-decoration: none;
}
a {
  position: relative;
}
a::after {
  content: "";
  transform-origin: 0 0;
  transform: scaleX(0);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.1em;
  background: white;
  z-index: -1;
  opacity: 0.8;
  transition: transform 0.3s;
}
a:hover::after {
  transform: scaleX(1);
}
</style>