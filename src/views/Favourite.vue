<template>
  <div class="fav">
    <div class="container">
      <div class="row cards-container">
        <div v-for="(favCityInfo, index) in favCityInfos" :key="index">
          <div class="titlu">
            <p class="coords">({{ favCityInfo.lat }}) / ({{ favCityInfo.lon }})</p>
            <h2 class="text-blue-600">{{ favCityInfo.name }}</h2>
          </div>

            <div class="col-3">
              <div class="now">
                <h3>{{ favCityInfo.time }}</h3>
                <img :src="icons(favCityInfo.icon)" alt />
                <h3>{{ favCityInfo.temperature }}*{{ shownUnit }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "cityInfos",
      "savedBoolean",
      "cardColumnInfos",
      "sunrise",
      "temperature",
      "weatherIcon",
      "shownUnit",
      "favCityInfos",
      "favCities"
    ])
  },
  methods: {
    icons(iconSrc) {
      return `/icons/${iconSrc}.png`;
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
  padding: 100px 0;
}
.coords{
  font-size: 16px;
}
.titlu{
  text-align: center;
  margin-top: 20px;
}
.cards-container {
  background: white;
  border-radius: 5px;
  border: 2px solid black;
  margin: 10px 0;
  padding-bottom:30px;
  display: flex;
  justify-content: space-evenly !important;
  flex-wrap: wrap !important;
}
.col-3 {
  border-top: 1px solid black;
  text-align: center;
  margin: 0 30px;
  background: rgb(221, 221, 221);
}
.favourited {
  color: yellow;
}
h3 {
  font-weight: 600;
}
.fa-star:hover {
  color: yellow;
  cursor: pointer;
}
</style>
