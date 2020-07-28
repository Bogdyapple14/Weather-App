<template>
  <div
    class="homepage"
    @keypress.enter="fetchApi('M'); fetchApi_3H('M');fetchApi_24H('M');fetchApi_120H('M')"
  >
    <div class="top">
      <input type="text" class="searchBar" v-model="cityName" />
      <button @click="fetchApi('M'); fetchApi_3H('M');fetchApi_24H('M');fetchApi_120H('M')">Search</button>
    </div>
    <div class="buttons">
      <button
        @click="fetchApi('M'); fetchApi_3H('M');fetchApi_24H('M');fetchApi_120H('M');changeShownUnit(`C`)"
      >Celcius</button>
      <button
        @click="fetchApi('S'); fetchApi_3H('S');fetchApi_24H('S');fetchApi_120H('S');changeShownUnit(`K`)"
      >Kelvin</button>
      <button
        @click="fetchApi('I'); fetchApi_3H('I');fetchApi_24H('I');fetchApi_120H('I');changeShownUnit(`F`)"
      >Farenheit</button>
    </div>
    <card></card>
    <div class="error" v-show="isError">
      <h2>Please enter a valid city</h2>
    </div>
  </div>
</template>

<script>
import card from "../components/card";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      unit: "M"
    };
  },
  components: {
    card
  },
  computed: {
    ...mapGetters(["isError", "shownUnit"]),
    cityName: {
      get() {
        return this.$store.getters.cityName;
      },
      set(value) {
        this.$store.commit("SET_CITYNAME", value);
      }
    }
  },
  methods: {
    fetchApi(payload) {
      this.$store.dispatch(`fetchApi`, payload);
    },
    fetchApi_3H(payload) {
      this.$store.dispatch(`fetchApi_3H`, payload);
    },
    fetchApi_24H(payload) {
      this.$store.dispatch(`fetchApi_24H`, payload);
    },
    fetchApi_120H(payload) {
      this.$store.dispatch(`fetchApi_120H`, payload);
    },
    changeShownUnit(payload) {
      this.$store.dispatch("setShownUnit", payload);
    }
  }
};
</script>

<style lang="scss">
.error h2 {
  background: white;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid blue;
}
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.top button,
.buttons button {
  margin: 0 10px;
  border: 2px solid blue;
  border-radius: 10px;
  background: white;
  font-weight: 600;
  height: 45px;
  transition: 0.5s all;

  &:hover {
    background: blue;
    color: white;
  }
}
.homepage {
  min-height: 100vh;
  width: 100vw;
  background-image: url("https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  .searchBar {
    height: fit-content;
    width: 300px;
    border: 2px solid blue;
    border-radius: 10px;
    font-size: 1.8em;
    padding: 0 10px;
    font-weight: 600;
    text-align: center;
  }
}
h2,
p,
h3 {
  margin: 0;
}
</style>