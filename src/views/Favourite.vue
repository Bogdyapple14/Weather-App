<template>
  <div class="fav">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-6" v-for="(infos,index) in $store.state.favCities" :key="index">
          <div class="card">
            <p>({{infos.lat}} / {{infos.lon}})</p>
            <h3>City Name: {{infos.city_name}}</h3>
            <h3>Saved Temperatue: {{infos.temp}}*{{shownUnit}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fav {
  background: url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100vw;
  padding: 100px 0;
}
.card {
  width: 600px;
  margin: 10px;
}
.col-md-6 {
  padding: 0;
}
.row {
  display: flex;
  justify-content: space-evenly;
}
</style>