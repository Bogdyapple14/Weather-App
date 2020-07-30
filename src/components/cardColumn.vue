<template>
  <div>
    <div class="col-3">
      <div class="now">
        <h3>{{ cardColumn.time }}</h3>
        <img :src="icons(cardColumn.icon)" alt />
        <h3>{{ cardColumn.temperature }}*{{ shownUnit }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["cardColumn"],
  methods: {
    icons(iconSrc) {
      return `/icons/${iconSrc}.png`;
    }
  },
  computed: {
    ...mapGetters([
      "sunrise",
      "temperature",
      "weatherIcon",
      "cityInfos",
      "savedBoolean",
      "shownUnit",
      "cardColumnInfos",
      "favCities"
    ])
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
