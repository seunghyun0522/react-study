import proTypes from "prop-types";
import styles from "./Movie.module.css";
function Info({ id, name, thumbnail, description }) {
  return (
    <div className={styles.info__main}>
      <h1 className={styles.info__name}>{name}</h1>
      <img src={thumbnail} className={styles.info__img} />
      <p className={styles.info__description}>
        {description.length < 10 ? (
          <p>
            There is no data on the description. But it's a really fun movie, so
            make sure to watch it!
          </p>
        ) : (
          `${description.slice(0, 300)}...`
        )}
      </p>
    </div>
  );
}

Info.proTypes = {
  id: proTypes.number.isRequired,
  thumbnail: proTypes.string.isRequired,
  name: proTypes.string.isRequired,
  description: proTypes.string.isRequired,
};

export default Info;
