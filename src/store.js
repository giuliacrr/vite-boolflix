import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  risultati: [],
  serieTv: [],
  search: "",
});

export function defaultList(x) {
  let urlMovies = `https://api.themoviedb.org/3/${x}/movie`;
  let urlTvs = `https://api.themoviedb.org/3/${x}/tv`;
  moviesList(urlMovies)
  tvsList(urlTvs)
}

//Movies
export function moviesList(url) {
  let filter = {
    api_key: "be9d64c21893bfff28bc8b2086fbc771",
    query: store.search,
  }
  //MOVIEs
  axios.get(url, {
    params: filter,
  }).then((response) => {
    store.risultati = response.data.results;
    console.log(store.risultati);
  });
}

//Tvs
export function tvsList(url) {
  let filter = {
    api_key: "be9d64c21893bfff28bc8b2086fbc771",
    query: store.search,
  }
  //TVs
  axios.get(url, {
    params: filter,
  }).then((response) => {
    store.serieTv = response.data.results;
    console.log(store.serieTv);
  });
}

