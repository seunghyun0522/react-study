import proTypes from "prop-types";

function Info({ id, name, thumbnail, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={thumbnail} />
      <p>
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
