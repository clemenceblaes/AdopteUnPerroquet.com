<template>
  <v-container>
    <v-card class="mx-auto" max-width="300">
      <v-img class="white--text align-end" height="200px">
        <v-card-title><slot name="name"></slot></v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"><slot name="desc1"></slot></v-card-subtitle>

      <v-card-text class="text--primary">
        <div><slot name="desc2"></slot></div>
      </v-card-text>

      <v-card-actions>
        <slot name="btn1"></slot>
        <v-spacer></v-spacer>
        <slot name="btn2"></slot>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");

#little .v-image {
  background: url("https://www.windycityparrot.com/wordpress/wp-content/uploads/60355079_s.jpg");
  background-size: cover;
}

#medium .v-image {
  background: url("https://petsoid.com/wp-content/uploads/2019/12/Soloman-Islands-Eclectus-pair.jpg");
  background-size: cover;
}

#large .v-image {
  background: url("https://jardinage.lemonde.fr/images/dossiers/2019-10/cacatoes-1-094044.jpg");
  background-size: cover;
}

#perruches .v-image {
  background: url("https://www.beaphar.com/portal/web/8/content/images/French_Content/header_article_perruche.jpg");
  background-size: cover;
}

#calopsittes .v-image {
  background: url("https://www.dezonnegloed.be/src/Frontend/Files/Media/Images/400x300/2019%2009%20Valkparkiet%20-%20Bali%2003%20-%20vierkant.png");
  background-size: cover;
}

#youyous .v-image {
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Mohrenkopfpapagei1.jpg/290px-Mohrenkopfpapagei1.jpg");
  background-size: cover;
}

#conures .v-image {
  background: url("https://redcdn.net/anipassion/ow_userfiles/plugins/animal/breed_image_58f8b0dd70dc5.jpg");
  background-size: cover;
}

#touis .v-image {
  background: url("https://anipassion.com/ow_userfiles/plugins/base/27-toui-celeste.png");
  background-size: cover;
}

#eclectus .v-image {
  background: url("https://www.publicdomainpictures.net/pictures/300000/velka/electus-parrot.jpg");
  background-size: cover;
}

#perruchesCollier .v-image {
  background: url("https://s.rfi.fr/media/display/e65060c6-adc6-11ea-a7ec-005056bf87d6/w:980/p:16x9/gettyimages-1180438768_0.webp");
  background-size: cover;
}

#pionus .v-image {
  background: url("https://www.macawland.com/wp-content/uploads/2019/04/maxresdefault.jpg");
  background-size: cover;
}

#aras .v-image {
  background: url("https://t2.ea.ltmcdn.com/fr/images/1/5/5/le_perroquet_ara_comme_animal_de_compagnie_551_600.jpg");
  background-size: cover;
}

#cacatoes .v-image {
  background: url("https://jardinage.lemonde.fr/images/dossiers/2019-10/cacatoes-1-094044.jpg");
  background-size: cover;
}

#amazones .v-image {
  background: url("https://cdn2.bioparc-zoo.fr/wp-content/uploads/2020/02/bioparc-parc-zoologique-amazone-front-bleu-2.jpg");
  background-size: cover;
}

#gris .v-image {
  background: url("https://jardinage.lemonde.fr/images/dossiers/2019-09/gris-gabon-2-095915.jpg");
  background-size: cover;
}
</style>
