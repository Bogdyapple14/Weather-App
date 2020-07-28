<template>
  <div class="fav">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-6" v-for="(infos,index) in favCities" :key="index">
          <h1></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    favCities() {
      return this.$store.getters.favCities;
    },
    savedCityInfos() {
      return this.$store.getters.savedCityInfos;
    }
  }
};
</script>

<style scoped>
.fav {
  background: url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
}
.col-md-6 {
  padding: 0;
}
.container {
  align-items: center;
}
.row {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.favourited {
  color: yellow;
}
.now,
.d5,
.d1,
.h3h {
  margin: 0 20px;
}
.title p {
  font-size: 1.5rem;
}
.sections .col-3 {
  min-width: 170px;
  height: 100%;
  border: 1px solid black;
  text-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}
h3 {
  font-weight: 600;
}
.card {
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.7)
  );
  border: 2px solid black;
  padding: 0 15px;
}
.title {
  padding: 10px 0;
  margin: 0 !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.title h2 {
  font-weight: 600;
}
.fa-star:hover {
  color: yellow;
  cursor: pointer;
}
</style>