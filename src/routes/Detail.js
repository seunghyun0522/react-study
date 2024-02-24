import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";

function Detail() {
  const { id } = useParams();
  const [info, setInfo] = useState();
  const getCharacter = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setInfo(json.data.results);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div>
      {info?.map((info) => (
        <Info
          key={info.id}
          id={info.id}
          thumbnail={`${info.thumbnail.path}.${info.thumbnail.extension}`}
          name={info.name}
          description={info.description}
        />
      ))}
    </div>
  );
}
export default Detail;
