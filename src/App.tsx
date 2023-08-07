import { FormEvent, useState } from "react";

import FilmsApi from "./services/FilmsApi";
import Film from "./models/Film";
import Result from "./Result";

function App() {
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [films, setFilms] = useState<Film[]>([]);

  const search = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setHasSearched(true);
    const result = await FilmsApi.searchFilms(searchTerm);
    setTotalResults(result.totalResults || 0);
    setFilms(result.Search || []);
    setIsLoading(false);
  };

  return (
    <div className="text-center">
      <h1 style={{ marginTop: 35, marginBottom: 20 }}>
        <i className="bi bi-film" style={{ margin: 10, marginBottom: 10 }} />
        <span>Films Database</span>
      </h1>
      <form
        onSubmit={(e) => search(e)}
        className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3"
      >
        <div className="input-group mb-3">
          <input
            type="text"
            value={searchTerm}
            className="form-control"
            placeholder="Search for Films"
            aria-describedby="basic-addon"
            onChange={({ target }) => setSearchTerm(target.value)}
          />
          <button type="submit" className="input-group-text" id="basic-addon">
            Search
          </button>
        </div>
      </form>
      {hasSearched && (
        <Result
          isLoading={isLoading}
          totalResults={totalResults}
          films={films}
        ></Result>
      )}
    </div>
  );
}

export default App;
