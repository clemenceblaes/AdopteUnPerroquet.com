<template>
  <v-container fluid>
    <v-row><Menu /></v-row>
    <NewAccount />
  </v-container>
</template>

<script>
import NewAccount from "@/components/NewAccount.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "NewAccountPage",
  components: {
    NewAccount,
    Menu,
  },
};
</script>