import Film from "./models/Film";

const noPosterMark = "N/A";
const noPosterImg = "https://via.placeholder.com/175x248";

const imdbEndpoint = "https://www.imdb.com/";
const linkTarget = (imdbID: string) => `${imdbEndpoint}title/${imdbID}`;

interface Params {
  film: Film;
}

function FilmCard({ film }: Params) {
  const posterImage = film.Poster === noPosterMark ? noPosterImg : film.Poster;

  return (
    <>
      <div
        className="card"
        style={{
          width: 175,
          margin: "0 10px 10px 0",
          display: "inline-block",
          verticalAlign: "top",
        }}
      >
        <img
          src={posterImage}
          className="card-img-top"
          alt={film.Title}
          style={{ width: 175 }}
        />
        <div className="card-body" style={{ padding: 12 }}>
          <h6 className="card-title" style={{ marginBottom: 5 }}>
            {film.Title}
          </h6>
          <p className="card-text" style={{ marginBottom: 10, fontSize: 15 }}>
            {film.Year} ·{" "}
            <small style={{ textTransform: "uppercase" }}>movie</small>
          </p>
          <a
            href={linkTarget(film.imdbID)}
            className="btn btn-primary"
            target="_blank"
          >
            More info
          </a>
        </div>
      </div>
    </>
  );
}

export default FilmCard;
