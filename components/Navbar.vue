<template>
  <div class="container">
    <v-app-bar app color="#1f1d1d" dark height="125">
      <v-col id="logo" class="d-flex" height="125"> </v-col>

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

@media screen and (min-width: 200px) and (max-width: 640px) {
  #logo {
    background: url("https://zupimages.net/up/21/04/wq0l.jpg") !important;
    background-size: cover !important;
    margin: auto !important;
    height: 120px !important;
  }

  .account,
  .account:hover {
    font-size: 0.7rem !important;
    padding: 0 !important;
  }
}

/* Media queries Galaxy Fold, and Surface Duo */
@media only screen and (min-width: 280px) and (max-width: 280px) {
  #logo {
    margin: auto auto auto -20px !important;
    width: 200% !important;
  }
}

@media only screen and (min-width: 540px) and (max-width: 540px) {
  #logo {
    width: 200% !important;
    margin-top: -30px !important;
  }
}

#logo {
  background: url("https://zupimages.net/up/20/52/61is.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 150px;
  margin: -30px auto auto 30px;
}

.account,
.account:hover {
  color: white;
  font-family: "Baloo Thambi 2", sans-serif;
  text-decoration: none;
}
</style>

