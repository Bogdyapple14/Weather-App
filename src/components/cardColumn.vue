<template>
  <div>
    <div class="col-3">
      <div class="now">
        <h3>{{cardColumn.time}}</h3>
        <img :src="icons(weatherIcon)" alt />
        <h3>{{temperature}}*{{shownUnit}}</h3>
        <p>Sunrise : {{sunrise}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardColumn"],
  methods: {
    icons(iconSrc) {
      return `/icons/${iconSrc}.png`;
    }
  },
  computed: {
    temperature() {
      return this.$store.getters.temperature;
    },
    weatherIcon() {
      return this.$store.getters.weatherIcon;
    },
    sunrise() {
      return this.$store.getters.sunrise;
    },
    cityInfos() {
      return this.$store.getters.cityInfos;
    },
    shownUnit() {
      return this.$store.getters.shownUnit;
    },
    savedCityInfos() {
      return this.$store.getters.savedCityInfos;
    }
  }
};
</script>

<style>
.col-3 {
  text-align: center;
  border: 1px solid black;
  border-radius: 10px !important;
  min-width: fit-content;
}
</style>