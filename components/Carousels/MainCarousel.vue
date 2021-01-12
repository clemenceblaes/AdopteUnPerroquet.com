<template>
  <v-carousel class="mt-4" height="600" cycle:true>
    <v-carousel-item
      eager
      v-for="(picture, i) in pictures"
      :key="i"
      :src="picture.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      pictures: [
        {
          src:
            "https://parrotwildlifefoundation.org/wp-content/uploads/2019/12/pwlf-actualite-perroquet-responsabilit%C3%A9-1-1.jpg",
        },
        {
          src:
            "https://wildfor.life/sites/default/files/species/hero/hyacinth_macaw.png",
        },
        {
          src:
            "https://cdn-s-www.dna.fr/images/88BE0339-284F-46FA-90FC-E448B46457A0/MF_contenu/australie-un-perroquet-sauve-son-maitre-d-un-incendie-en-criant-son-nom-1604496857.jpg",
        },
        {
          src:
            "https://www.thoiry.net/sites/thoiry.net/files/2018-06/cacato%C3%A8s.jpg",
        },
      ],
    };
  },
};
</script>
