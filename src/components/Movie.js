import proTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ id, thumbnail, name, description }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`} className={styles.movies__back}>
        <img src={thumbnail} alt={name} className={styles.movie__img} />

        <h2 className={styles.movie__name}>{name}</h2>

        <p className={styles.description}>
          {description.length < 10 ? (
            <p>There is no data on the description.</p>
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
