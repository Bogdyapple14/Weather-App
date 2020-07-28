<template>
  <div>
    <div class="card" v-show="searched">
      <div class="row title">
        <p class="coords">({{cityInfos.lat}}) / ({{cityInfos.lon}})</p>
        <h2>{{ cityInfos.city_name }}</h2>
        <button @click="addToFav" class="addToFav">
          <i class="far fa-star"></i>
        </button>
      </div>
      <div class="cardColumnsSection">
        <div class="cardColumn" v-for="(cardColumn,index) in cardColumn" :key="index">
          <cardColumn :cardColumn="cardColumn"></cardColumn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardColumn from "./cardColumn";
export default {
  props: ["searched"],
  data() {
    return {
      cardColumn: [
        { time: "Now", temperature: "", icon: "", sunrise: "" },
        { time: "3H", temperature: "", icon: "", sunrise: "" },
        { time: "24H", temperature: "", icon: "", sunrise: "" },
        { time: "120H", temperature: "", icon: "", sunrise: "" }
      ]
    };
  },
  components: {
    cardColumn
  },
  methods: {
    addToFav() {
      alert("Added To Favourites");
      this.$store.dispatch("addToFav");
      this.$store.dispatch("SET_SAVEDCITYINFOS");
    }
  },
  computed: {
    sunrise() {
      return this.$store.getters.sunrise;
    },
    temperature() {
      return this.$store.getters.temperature;
    },
    weatherIcon() {
      return this.$store.getters.weatherIcon;
    },

    cityInfos() {
      return this.$store.getters.cityInfos;
    },
    savedBoolean() {
      return this.$store.getters.savedBoolean;
    },
    favCities() {
      return this.$store.getters.favCities;
    }
  }
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  min-width: 700px;
  border: 2px solid black;
  margin: 10px 0;
}
.title {
  display: flex;
  height: fit-content;
  align-self: center;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 2px solid black;
  width: 100%;
  padding: 10px 0;
}
.cardColumnsSection {
  display: flex !important;
  justify-content: space-evenly;
  margin-bottom: 20px;
}
.coords {
  font-size: 1.5rem;
  font-weight: 400;
}
h2 {
  font-weight: 600;
}
</style>