import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityName: "",
    index: 0,
    favCities: [
    ],
    unit: "M",
    shownUnit: "C",
    cityInfos: [],
    cityInfos_3H: [],
    cityInfos_24H: [],
    cityInfos_120H: [],
    isError: false,
    savedBoolean: false,
    newArray: [],
    cardColumnInfos: [
      { time: "Now", temperature: "", icon: "" },
      { time: "3H", temperature: "", icon: "" },
      { time: "24H", temperature: "", icon: "" },
      { time: "120H", temperature: "", icon: "" }
    ]
  },
  mutations: {
    SET_CARDCOLUMNINFOS(state, payload) {
      state.cardColumnInfos = payload;
    },
    INCREASE_INDEX(state, payload) {
      state.index = payload;
    },
    SET_CARDCOLUMNINFOS_TEMPERATURE(state, payload) {
      state.cardColumnInfos[state.index].temperature = payload;
    },
    SET_CARDCOLUMNINFOS_ICON(state, payload) {
      state.cardColumnInfos[state.index].icon = payload;
    },
    SET_CARDCOLUMNINFOS_SUNRISE(state, payload) {
      state.cardColumnInfos[state.index].sunrise = payload;
    },
    SET_SAVEDBOOLEAN(state, payload) {
      state.savedBoolean = payload;
    },
    SET_SHOWNUNIT(state, payload) {
      state.shownUnit = payload;
    },
    SET_ERROR(state, payload) {
      state.isError = payload;
    },
    SET_CITYINFOS_3H(state, payload) {
      state.cityInfos_3H = payload;
    },
    SET_CITYINFOS_24H(state, payload) {
      state.cityInfos_24H = payload;
    },
    SET_CITYINFOS_120H(state, payload) {
      state.cityInfos_120H = payload;
    },
    SET_CITYINFOS(state, payload) {
      state.cityInfos = payload;
    },
    SET_CITYNAME(state, payload) {
      state.cityName = payload;
    },
    ADD_FAV(state) {
      state.favCities.push(state.cardColumnInfos)
    }
  },
  getters: {
    cardColumnInfos: state => {
      return state.cardColumnInfos;
    },
    favCities: state => {
      return state.favCities;
    },
    shownUnit: state => {
      return state.shownUnit;
    },
    cityName: state => {
      return state.cityName;
    },
    unit: state => {
      return state.unit;
    },
    isError: state => {
      return state.isError;
    },
    cityInfos: state => {
      return state.cityInfos;
    },
    savedBoolean: state => {
      return state.savedBoolean;
    }
  },
  actions: {
    async fetchApi({ commit, state }, unit) {
      await axios
        .get(
          "https://api.weatherbit.io/v2.0/current?city=" +
          state.cityName +
          ",NC&key=8ce5a5e907914482be4ae7d4ea0c069f&units=" +
          unit
        )
        .then(response => {
          const data = response.data.data;

          commit("SET_CITYINFOS", data[0]);
          commit("SET_ERROR", false);
          commit("SET_SAVEDBOOLEAN", true);

          commit("SET_CARDCOLUMNINFOS_TEMPERATURE", data[0].temp);
          commit("SET_CARDCOLUMNINFOS_ICON", data[0].weather.icon);
        })
        .catch(() => {
          commit("SET_CITYINFOS", []);
          commit("SET_ERROR", true);
          commit("SET_SAVEDBOOLEAN", false);
        });
    },

    async fetchApi_3H({ commit, state }, unit) {
      await axios
        .get(
          "https://api.weatherbit.io/v2.0/forecast/hourly?city=" +
          state.cityName +
          ",NC&key=8ce5a5e907914482be4ae7d4ea0c069f&hours=3&units=" +
          unit
        )
        .then(response => {
          const data = response.data.data;
          commit("INCREASE_INDEX", 1);
          commit("SET_CITYINFOS_3H", data[data.length - 1]);
          commit("SET_CARDCOLUMNINFOS_TEMPERATURE", data[data.length - 1].temp);
          commit(
            "SET_CARDCOLUMNINFOS_ICON",
            data[data.length - 1].weather.icon
          );
        });
    },

    async fetchApi_24H({ commit, state }, unit) {
      await axios
        .get(
          "https://api.weatherbit.io/v2.0/forecast/hourly?city=" +
          state.cityName +
          ",NC&key=8ce5a5e907914482be4ae7d4ea0c069f&hours=24&units=" +
          unit
        )
        .then(response => {
          const data = response.data.data;
          commit("INCREASE_INDEX", 2);
          commit("SET_CITYINFOS_24H", data[data.length - 1]);
          commit("SET_CARDCOLUMNINFOS_TEMPERATURE", data[data.length - 1].temp);
          commit(
            "SET_CARDCOLUMNINFOS_ICON",
            data[data.length - 1].weather.icon
          );
        });
    },

    async fetchApi_120H({ commit, state }, unit) {
      await axios
        .get(
          "https://api.weatherbit.io/v2.0/forecast/hourly?city=" +
          state.cityName +
          ",NC&key=8ce5a5e907914482be4ae7d4ea0c069f&hours=120&units=" +
          unit
        )
        .then(response => {
          const data = response.data.data;
          commit("INCREASE_INDEX", 3);
          commit("SET_CITYINFOS_120H", data[data.length - 1]);
          commit("SET_CARDCOLUMNINFOS_TEMPERATURE", data[data.length - 1].temp);
          commit(
            "SET_CARDCOLUMNINFOS_ICON",
            data[data.length - 1].weather.icon
          );
        });
    },
    setCityName({ commit, state }) {
      commit("SET_CITYNAME", state.cityName);
    },
    setShownUnit({ commit }, shownUnit) {
      commit("SET_SHOWNUNIT", shownUnit);
    },
    addToFav({ commit, state }, cardColumnInfos) {
      commit("ADD_FAV", cardColumnInfos);
      console.log(state.favCities)
    }
  }
});
