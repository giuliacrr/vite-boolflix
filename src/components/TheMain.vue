<script>
import { store } from "../store";
import LangFlag from "vue-lang-code-flags";
export default {
  components: {
    LangFlag,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {},
};
</script>

<template>
  <div>
    <!--Movies-->
    <h1 class="text-white mt-4 ms-4" id="Moviez">Movies</h1>
    <div class="mt-3 p-3 d-flex flex-wrap justify-content-center">
      <div class="d-flex overflow-auto">
        <div
          v-for="movie in store.risultati"
          class="m-3 movie-card d-flex justify-content-center"
        >
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
                      <span class="text-uppercase"
                        >{{ movie.original_language }}
                      </span>
                      <!--Not every flag works
                    Missing flags:Sweden, Nederlands, -->
                      <lang-flag
                        :iso="movie.original_language"
                        title="Some title"
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

    <!--Tvs-->
    <h1 class="text-white mt-5 ms-5" id="TVz">TV Series</h1>
    <div class="mt-1 p-3 d-flex flex-wrap justify-content-center">
      <div class="d-flex overflow-auto">
        <div
          v-for="Tvs in store.serieTv"
          class="m-3 movie-card d-flex justify-content-center"
        >
          <div class="card position-relative" style="width: 18rem">
            <div class="img-box">
              <img
                :src="`http://image.tmdb.org/t/p/w500/${Tvs.poster_path}`"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div
              class="card-body overlay text-center position-absolute text-white"
            >
              <div class="card-title text-center">
                <h4 class="pb-3">
                  <span class="fw-bold">Titolo:</span> {{ Tvs.name }}
                </h4>
                <div class="pb-3">
                  <span class="fw-bold">Titolo originale: </span>
                  {{ Tvs.original_name }}
                </div>
              </div>
              <div class="card-text">
                <div class="pb-3">
                  <div
                    class="align-items-center d-flex justify-content-center align-items-center"
                  >
                    <div class="fw-bold me-1">
                      Lingua Originale:
                      <span class="text-uppercase"
                        >{{ Tvs.original_language }}
                      </span>
                      <!--Not every flag works
                    Missing flags:Sweden, Nederlands, -->
                      <lang-flag
                        :iso="Tvs.original_language"
                        title="Some title"
                      />
                    </div>
                    <div></div>
                  </div>
                </div>
                <div>
                  <span class="fw-bold">Voto: </span>
                  {{ Tvs.vote_average }}/10
                </div>
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
  width: 286px;
  height: 429px;
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
  background-image: url(https://media.istockphoto.com/id/1352945762/vector/no-image-available-like-missing-picture.jpg?s=612x612&w=0&k=20&c=4X-znbt02a8EIdxwDFaxfmKvUhTnLvLMv1i1f3bToog=);
  background-color: white;
  background-size: cover;
  background-position: center;
}

.card:hover .overlay {
  opacity: 1;
  color: white;
}
</stype>
