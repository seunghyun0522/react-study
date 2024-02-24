import proTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, thumbnail, name, description }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={thumbnail} alt={name} />

        <h2>{name}</h2>

        <p>
          {description.length < 10 ? (
            <p>
              There is no data on the description. But it's a really fun movie,
              so make sure to watch it!
            </p>
          ) : (
            `${description.slice(0, 80)}...`
          )}
        </p>
      </Link>
    </div>
  );
}

Movie.proTypes = {
  id: proTypes.number.isRequired,
  thumbnail: proTypes.string.isRequired,
  name: proTypes.string.isRequired,
  description: proTypes.string.isRequired,
};

export default Movie;
