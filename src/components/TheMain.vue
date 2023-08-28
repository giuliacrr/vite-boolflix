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
  <div class="container bg-dark">
    <div class="d-flex flex-wrap mt-5 mb-5">
      <div v-for="movie in store.risultati" class="col p-3">
        <div class="card position-relative" style="width: 18rem">
          <div class="img-box">
            <img
              :src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div
            class="card-body overlay text-center position-absolute text-white"
          >
            <div class="card-title text-center">
              <h4 class="pb-3">
                <span class="fw-bold">Titolo:</span> {{ movie.title }}
              </h4>
              <div class="pb-3">
                <span class="fw-bold">Titolo originale: </span>
                {{ movie.original_title }}
              </div>
            </div>
            <div class="card-text">
              <div class="pb-3">
                <div
                  class="align-items-center d-flex justify-content-center align-items-center"
                >
                  <div class="fw-bold me-1">
                    Lingua Originale:
                    <span class="text-uppercase">{{
                      movie.original_language
                    }}</span>
                    <!--Not every flag works, oh well.-->
                    <img
                      :src="`https://flagcdn.com/16x12/${movie.original_language}.png`"
                      width="16"
                      height="12"
                      alt="flag"
                    />
                  </div>
                  <div></div>
                </div>
              </div>
              <div>
                <span class="fw-bold">Voto: </span>
                {{ movie.vote_average }}/10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<stype lang="scss" scoped>
.card-body {
  width: 100%;
  bottom: 0%;
}
.overlay {
  opacity: 0;
  inset: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.6);
}

//Temporary solution
.img-box {
  height: 429px;
  width: 286px;
  background-image: url(https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg);
  background-color: white;
  background-size: cover;
  background-position: left;
}

.card:hover .overlay {
  opacity: 1;
  color: white;
}
</stype>
