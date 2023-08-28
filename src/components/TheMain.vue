<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  mounted() {},
};
</script>

<template>
  <div class="container bg-dark d-flex flex-wrap">
    <!--Card-->
    <div class="movie-poster" v-for="movie in store.risultati">
      <!-- Card Image -->
      <img
        :src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        class="img-top"
        alt="movie poster"
      />
      <div class="info"></div>
    </div>
  </div>
</template>

<stype lang="scss">
.movie-poster {
  position: relative;
}
.info {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0px;
}
</stype>
