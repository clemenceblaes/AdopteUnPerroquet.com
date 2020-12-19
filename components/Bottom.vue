<template>
  <div class="bottom">
    <div class="logo col-4"></div>
    <div class="contact col-4">
      ADOPTEUNPERROQUET.COM<br />
      Le site de rencontre entre éleveurs, associations et particuliers.<br />
      Contact : hello@adopteunperroquet.com
    </div>
    <div class="menu col-4">
      <li><router-link to="/">Acceuil</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/auth">Mon compte</router-link></li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");

a {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #709255;
}

.bottom {
  width: 100%;
  display: flex;
}

.logo {
  background: url("https://zupimages.net/up/20/51/zath.png");
  background-size: cover;
  height: 200px;
}

.contact,
.menu {
  margin: auto;
}

.menu {
  text-transform: uppercase;
  list-style: none;
}
</style>