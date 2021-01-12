<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      <slot name="name"></slot> - <slot name="age"></slot>
    </v-card-title>

    <v-card-subtitle> <slot name="desc1"></slot> </v-card-subtitle>
    <v-card-text class="text--primary">
      <div><slot name="desc2"></slot></div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Voir sa fiche </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>
