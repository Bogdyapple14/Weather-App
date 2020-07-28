import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    cityName: "",
    coord: {
      type: Number
    },
    unit: "M",
    shownUnit: "C",
    cityInfos: [],
    savedCityInfos: [],
    favCities: [],
    isError: false,
    apiData: "",
    temperature: {
      type: Number
    },
    sunrise: "",
    weatherIcon: "",
    savedBoolean: {
      type: Boolean,
      default: true
    }
  },
  mutations: {
    SET_TEMPERATURE(state, payload) {
      state.temperature = payload
    },
    SET_WEATHERICON(state, payload) {
      state.weatherIcon = payload
    },
    SET_SAVEDBOOLEAN(state) {
      state.savedBoolean = !state.savedBoolean
    },
    SET_SUNRISE(state, payload) {
      state.sunrise = payload
    },
    SET_SHOWNUNIT(state, payload) {
      state.shownUnit = payload
    },
    SET_SAVEDCITYINFOS(state, payload) {
      state.savedCityInfos = payload
    },
    SET_DATA(state, payload) {
      state.apiData = payload
    },
    SET_ERROR(state, payload) {
      state.isError = payload
    },
    SET_CITYINFOS(state, payload) {
      state.cityInfos = payload
    },
    SET_CITYNAME(state, payload) {
      state.cityName = payload
    },
    ADD_FAV(state, payload) {
      state.favCities.push(payload)
    }
  },
  getters: {
    temperature: state => {
      return state.temperature
    },
    weatherIcon: state => {
      return state.weatherIcon
    },
    savedCityInfos: state => {
      return state.savedCityInfos
    },
    sunrise: state => {
      return state.sunrise
    },
    shownUnit: state => {
      return state.shownUnit
    },
    cityName: state => {
      return state.cityName
    },
    unit: state => {
      return state.unit
    },
    coord: state => {
      return state.coordinates
    },
    isError: state => {
      return state.isError
    },
    cityInfos: state => {
      return state.cityInfos
    },
    favCities: state => {
      return state.favCities
    }
  },
  actions: {
    addToFav({ commit, state }) {
      commit('ADD_FAV', state.savedCityInfos)
    },
    async fetchApi({ commit, state }, unit) {
      axios
        .get(
          "https://api.weatherbit.io/v2.0/current?city=" +
          state.cityName +
          ",NC&key=8ce5a5e907914482be4ae7d4ea0c069f&units=" + unit
        )
        .then(response => {
          commit('SET_SAVEDBOOLEAN')
          commit("SET_DATA", response)
          commit("SET_CITYINFOS", ...[...response.data.data])
          commit("SET_ERROR", false)
          commit("SET_SAVEDCITYINFOS", ...[...response.data.data])
          commit('SET_TEMPERATURE', state.cityInfos.temp)
          commit('SET_SUNRISE', state.cityInfos.sunrise)
          commit('SET_WEATHERICON', state.cityInfos.weather.icon)
        })
        .catch(() => {
          commit("SET_CITYINFOS", [])
          commit("SET_SAVEDCITYINFOS", [])
          commit("SET_ERROR", true)
        });
    },
    setCityName({ commit, state }) {
      commit("SET_CITYNAME", state.cityName)
    },
    setShownUnit({ commit }, shownUnit) {
      commit('SET_SHOWNUNIT', shownUnit)

    },
  },
  modules: {}
});
