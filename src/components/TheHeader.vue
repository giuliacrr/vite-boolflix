<script>
import { store, moviesList, defaultList } from "../store";
export default {
  data() {
    return {
      store,
      url: "https://api.themoviedb.org/3/search/movie",
    };
  },
  methods: {
    moviesList,
  },
  mounted() {
    defaultList();
  },
};
</script>

<template>
  <div>
    <div
      class="container d-flex justify-content-between align-items-center mt-3"
    >
      <div><img src="../assets/page-logo.png" alt="" /></div>
      <div class="d-flex s-bar" role="search">
        <input
          v-model="store.search"
          class="form-control me-2"
          type="search"
          placeholder="Cerca"
          aria-label="Search a movie or a tv show"
        />
        <button class="text-uppercase" @click="moviesList(url)">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.s-bar {
  width: 400px;
}

button {
  background-color: #dc1a28;
  border: 1px solid #6f1c28;
  color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px;
  margin-left: -10px;
}
</style>
