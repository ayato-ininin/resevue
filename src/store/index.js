import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex)


export default new Vuex.Store({
  plugins:[createPersistedState()],
  state: {
    auth: "",
    user: "",
    likes: "",
    reserve:"",
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
    user(state, payload) {
      state.user = payload;
    },
    likes(state, payload) {
      state.likes = payload;
    },
    reserve(state, payload) {
      state.reserve = payload;
    },
    logout(state, payload) {
      state.auth = payload;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      const responseLogin = await axios.post(
        "http://127.0.0.1:8000/api/login",
        {
          email: email,
          password: password,
        }
      );
      const responseUser = await axios.get(
        "http://127.0.0.1:8000/api/users",
        {
          params: {
            email: email,
          },
        }
      );
      commit("auth", responseLogin.data.auth);
      commit("user", responseUser.data.data);
      commit("likes", responseUser.data.likes);
      commit("reserve", responseUser.data.reserve);
      console.log(responseUser.data);
      console.log(responseUser.data.likes);
      console.log(responseUser.data.reserve);
      console.log(this.state.user);
      router.replace("/");
    },
    logout({ commit }) {
      axios.post("http://127.0.0.1:8000/api/logout", {
        auth: this.state.auth,
      })
        .then((response) => {
          console.log(response);
          commit("logout", response.data.auth);
          router.replace("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  modules: {
  }
})
