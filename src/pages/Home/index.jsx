import React, { useEffect, useState } from "react";

import ItemCard from "../../components/ItemCard";

import styles from "./index.module.scss";

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleGetConditions = () => {
    fetch("https://api.datos.gob.mx/v1/calidadAire", { method: "GET" })
      .then((response) => {
        response.json().then(({ pagination, results }) => {
          setLoading(false);
          setData(results);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetConditions();
  }, []);

  return (
    <div className={styles.Home}>
      {loading && "Cargando...."}
      {!loading && (
        <div className={styles.Container}>
          {data.map(({ stations }) => {
            const { id, name, location, measurements, indexes } = stations[0];
            return (
              <ItemCard
                key={id}
                id={id}
                name={name}
                location={location}
                measurements={measurements[0]}
                indexes={indexes[0]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default React.memo(Home);
