import FilmCard from "./FilmCard";
import Film from "./models/Film";

interface Params {
  isLoading: boolean;
  totalResults: number;
  films: Film[];
}

function Result({ isLoading, totalResults, films }: Params) {
  return (
    <div style={{ marginTop: 20 }}>
      {isLoading ? (
        <div
          className="spinner-border spinner-border-sm"
          style={{ color: "#aaa" }}
        ></div>
      ) : films && films.length > 0 ? (
        <>
          <p>{totalResults} Films found</p>
          <div style={{ paddingLeft: 10 }}>
            {films.map((film) => (
              <FilmCard key={film.imdbID} film={film} />
            ))}
          </div>
        </>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default Result;
