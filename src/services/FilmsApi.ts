import SearchResult from "../models/SearchResult";

const apiKey = "8b096bbd";
const apiEndpoint = `https://www.omdbapi.com/?apikey=${apiKey}`;

export default {
  async searchFilms(searchTerm: string): Promise<SearchResult> {
    const data = await fetch(`${apiEndpoint}&s=${searchTerm}`);
    return await data.json();
  },
};
