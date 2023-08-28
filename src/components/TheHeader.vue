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
    <div class="container">
      <div class="d-flex s-bar" role="search">
        <input
          v-model="store.search"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search a movie or a tv show"
        />
        <button @click="moviesList(url)">Search</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.s-bar {
  max-width: 400px;
}
</style>
