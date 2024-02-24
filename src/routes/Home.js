import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import ReactApexChart from "react-apexcharts";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    console.log(json.data.results);
    setMovies(json.data.results);
    console.log(movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const yearCounts = {};
  movies.forEach((element) => {
    const year = element.modified.slice(0, 4);
    if (yearCounts[year]) {
      yearCounts[year]++;
    } else {
      yearCounts[year] = 1;
    }
  });
  console.log(yearCounts);
  const series = Object.values(yearCounts);
  const labels = Object.keys(yearCounts);

  const options = {
    series: series,
    chart: {
      width: 380,
      type: "pie",
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.table}>
          <div className={styles.content}>
            <div className={styles.titles}>title</div>
            <div className={styles.image}>img</div>
            <div className={styles.chart}>
              <div style={{ marginBottom: "20px" }}>연도별 마블 개봉 수</div>
              <ReactApexChart
                options={options}
                series={options.series}
                type="pie"
                width={380}
                s
              />
            </div>
          </div>
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                thumbnail={`${movie.thumbnail.path}.${movie.thumbnail.extension}`}
                name={movie.name}
                description={movie.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
