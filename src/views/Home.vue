<template>
  <div class="homepage" @keypress.enter="fetchApi();">
    <div class="top">
      <input type="text" class="searchBar" v-model="cityName" />
      <button @click="fetchApi();">Search</button>
    </div>
    <div class="buttons">
      <button @click="fetchApi('M');changeShownUnit(`C`)">Celcius</button>
      <button @click="fetchApi('S');changeShownUnit(`K`)">Kelvin</button>
      <button @click="fetchApi('I');changeShownUnit(`F`)">Farenheit</button>
    </div>
    <card :searched="searched"></card>
    <div class="error" v-show="isError">
      <h2>Please enter a valid city</h2>
    </div>
  </div>
</template>

<script>
import card from "../components/card";
export default {
  data() {
    return {
      unit: "M",
      searched: false
    };
  },
  components: {
    card
  },
  computed: {
    isError() {
      return this.$store.getters.isError;
    },
    cityName: {
      get() {
        return this.$store.getters.cityName;
      },
      set(value) {
        this.$store.commit("SET_CITYNAME", value);
      }
    },
    shownUnit() {
      return this.$store.getters.shownUnit;
    }
  },
  methods: {
    fetchApi(payload) {
      this.$store.dispatch(`fetchApi`, payload);
      this.searched = true
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