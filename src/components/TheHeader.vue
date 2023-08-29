<script>
import { store, moviesList, defaultList, tvsList } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    defaultList,
    moviesList,
    tvsList,
  },
  mounted() {
    defaultList("discover");
  },
};
</script>

<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mt-3">
      <div class="d-flex align-items-center ms-3">
        <img src="../assets/page-logo.png" alt="" />
        <ul class="d-flex">
          <li><a href="#Moviez">Movies</a></li>
          <li><a href="#TVz">TV series</a></li>
        </ul>
      </div>
      <div class="d-flex s-bar me-3" role="search">
        <input
          v-model="store.search"
          class="form-control me-2"
          type="search"
          placeholder="Cerca"
          aria-label="Search a movie or a tv show"
        />
        <button class="text-uppercase" @click="defaultList(`search`)">
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

ul {
  list-style-type: none;
  li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    margin-left: 20px;
    border-bottom: 2px transparent solid;
  }
  li a:hover {
    border-bottom-color: #dc1a28;
  }
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
