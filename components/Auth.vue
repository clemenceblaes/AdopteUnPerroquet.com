<template>
  <div>
    <div class="col-2 reg">
      <form>
        <p>
          Se connecter :
          <input type="text" name="pseudonyme" placeholder="Pseudonyme" />
          <input type="password" name="password" placeholder="Mot de passe" />
          <button>Se connecter</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "reg",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");

p {
  color: white;
  margin: auto;
  display: flex;
  flex-direction: column;
}

input {
  margin: 2% 0 2% 0;
}

button {
  margin-top: 2%;
}

.reg {
  margin: 3% auto auto auto;
  font-family: "Roboto", sans-serif;
}
</style>