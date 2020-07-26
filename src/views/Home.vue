<template>
  <div class="homepage" @keypress.enter="fetchApi();">
    <div class="top">
      <input type="text" class="searchBar" v-model="cityName" />
      <button @click="fetchApi(); fetchApi1();">Search</button>
    </div>
    <div class="buttons">
      <button @click="unitCelsius(); fetchApi();">Celcius</button>
      <button @click="unitKelvin(); fetchApi();">Kelvin</button>
      <button @click="unitFarenheit(); fetchApi();">Farenheit</button>
    </div>

    <div class="error" v-show="isError">
      <h2>Please enter a valid city</h2>
    </div>
    <div class="card" v-for="(info,index) in cityInfos" :key="index" :name="info.city_name">
      <div class="row title">
        <p>({{info.lat}} / {{info.lon}})</p>
        <h2>{{ info.city_name }}</h2>
        <button @click="addToFav" class="addToFav">
          <i class="far fa-star"></i>
        </button>
      </div>
      <div class="row sections">
        <div class="col-3">
          <div class="now">
            <h3>Now</h3>
            {{info.weather.icon}}
            <h3>{{info.temp}}*{{$store.state.shownUnit}}</h3>
            <p>Sunrise : {{info.sunrise_ts}}</p>
          </div>
        </div>
        <div class="col-3">
          <div class="h3h">
            <h3>3H</h3>
            {{info.weather.icon}}
            <h3>{{info.temp}}*{{$store.state.shownUnit}}</h3>
            <p>Sunrise : {{info.sunrise_ts}}</p>
          </div>
        </div>
        <div class="col-3 1d">
          <div class="d1">
            <h3>1D</h3>
            {{info.weather.icon}}
            <h3>{{info.temp}}*{{$store.state.shownUnit}}</h3>
            <p>Sunrise : {{info.sunrise_ts}}</p>
          </div>
        </div>
        <div class="col-3">
          <div class="d5">
            <h3>5D</h3>
            {{info.weather.icon}}
            <h3>{{info.temp}}*{{$store.state.shownUnit}}</h3>
            <p>Sunrise : {{info.sunrise_ts}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cityName: "",
      cityInfos: [],
      isError: false,
      shownUnit: "C"
    };
  },
  methods: {
    fetchApi() {
      axios
        .get(
          "https://api.weatherbit.io/v2.0/current?city=" +
            this.city +
            ",NC&key=8ce5a5e907914482be4ae7d4ea0c069f&units=" +
            this.$store.state.unit
        )
        .then(response => {
          this.cityInfos = [...response.data.data];
          this.isError = false;
        })
        .catch(() => {
          this.cityInfos = [];
          this.isError = true;
        });
    },
    fetchApi1() {
      axios
        .get(
          "https://api.weatherbit.io/v2.0/current?city=" +
            this.city +
            ",NC&key=8ce5a5e907914482be4ae7d4ea0c069f&units=" +
            this.$store.state.unit
        )
        .then(response => {
          this.cityInfos = [...response.data.data];
          this.isError = false;
        })
        .catch(() => {
          this.cityInfos = [];
          this.isError = true;
        });
    },
    unitCelsius() {
      this.$store.state.unit = "M";
      this.$store.state.shownUnit = "C";
    },
    unitKelvin() {
      this.$store.state.unit = "S";
      this.$store.state.shownUnit = "K";
    },
    unitFarenheit() {
      this.$store.state.unit = "I";
      this.$store.state.shownUnit = "F";
    },
    addToFav() {
      this.$store.state.favCities.push(...this.cityInfos);
      alert("Added To Favourite");
    }
  },
  computed: {
    city() {
      return this.cityName;
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
.addToFav {
  background: none;
  border: none;
  outline: none;
  user-select: none;
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

  h2 {
    font-weight: 600;
  }
}
.fa-star:hover {
  color: yellow;
  cursor: pointer;
}
</style>
