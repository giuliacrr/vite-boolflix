import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  risultati: [],
  search: "",
});

export function defaultList() {
  let url = "https://api.themoviedb.org/3/discover/movie";
  moviesList(url)
}

export function moviesList(url) {
  let filter = {
    api_key: "be9d64c21893bfff28bc8b2086fbc771",
    query: store.search,
  }
  console.log("ciao")
  // /tv per le serie tv
  axios.get(url, {
    params: filter,
  }).then((response) => {
    store.risultati = response.data.results;
    console.log(store.risultati);
  });
}