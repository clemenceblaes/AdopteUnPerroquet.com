<template>
  <div class="container">
    <v-app-bar app color="#1f1d1d" dark height="125">
      <v-col cols="5" id="logo" class="d-flex mt-10" height="125"> </v-col>

      <v-spacer></v-spacer>

      <v-col class="d-flex flex-row-reverse"
        ><v-btn class="account" target="_blank" text>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle account"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ app.user ? app.user.name : "Mon compte" }}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div v-if="!app.user">
                  <router-link to="/login" class="dropdown-item"
                    >Se connecter</router-link
                  >
                  <router-link to="/register" class="dropdown-item"
                    >S'enregister</router-link
                  >
                </div>
                <a
                  v-else
                  v-on:click="logout"
                  href="javascript:;"
                  class="dropdown-item"
                  >Se déconnecter</a
                >
              </div>
            </li>
          </ul>
        </v-btn></v-col
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: ["app"],
  data() {
    return {};
  },
  methods: {
    logout() {
      this.app.req.post("auth/logout").then(() => {
        this.app.user = null;
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@500;700&display=swap");

@media screen and (min-width: 768px) and (max-width: 1024px) {
  #logo {
    margin-top: -26px !important;
  }
}

/* Media queries Galaxy Fold, and Surface Duo */
@media screen and (min-width: 540px) and (max-width: 540px) {
  #logo {
    margin-top: 0px !important;
  }
}

@media screen and (min-width: 280px) and (max-width: 280px) {
  #logo {
    margin-top: 60px !important;
  }

  .v-application ul {
    padding-left: 0px !important;
  }
}

#logo {
  background: url("https://zupimages.net/up/20/52/61is.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 150px;
}

.v-application a {
  font-family: "Baloo Thambi 2", sans-serif;
  color: #709255;
}
</style>

