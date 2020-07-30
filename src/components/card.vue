<template>
  <div>
    <div class="card" v-show="savedBoolean">
      <div class="row title">
        <p class="coords">({{ cityInfos.lat }}) / ({{ cityInfos.lon }})</p>
        <h2 class="text-blue-600">{{ cityInfos.city_name }}</h2>
        <button class="addToFav hover:text-yellow-400" @click="addToFav(cardColumnInfos)">
          <i class="far fa-star"></i>
        </button>
      </div>
      <div class="cardColumnsSection">
        <cardColumn
          class="cardColumn"
          :cardColumn="cardColumn"
          v-for="(cardColumn, index) in cardColumnInfos"
          :key="index"
        ></cardColumn>
      </div>
    </div>
  </div>
</template>

<script>
import cardColumn from "./cardColumn";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cityInfos", "savedBoolean", "cardColumnInfos"])
  },
  components: {
    cardColumn
  },
  methods: {
    addToFav(payload) {
      this.$store.dispatch(`addToFav`, payload);
      alert("Added To Favourite");
    },

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
