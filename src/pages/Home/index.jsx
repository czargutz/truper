import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ItemCard from "../../components/ItemCard";

import styles from "./index.module.scss";

import { addQualityData } from "../../reducer";

function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [loading, setLoading] = useState(true);

  const defaultData = useSelector((state) => state.defaultReducer.data);
  const sessionData = useSelector((state) => state.defaultReducer.session);

  const handleGetConditions = () => {
    fetch("https://api.datos.gob.mx/v1/calidadAire", { method: "GET" })
      .then((response) => {
        response.json().then(({ results }) => {
          setLoading(false);
          dispatch(addQualityData(results));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!sessionData) {
      navigation("/");
    } else {
      handleGetConditions();
    }
  }, []);

  return (
    <div className={styles.Home}>
      {loading && "Cargando...."}
      {!loading && (
        <div className={styles.Container}>
          {defaultData.map(({ stations }, index) => {
            const { id, name, location, measurements, indexes } = stations[0];
            return (
              <ItemCard
                key={`${id}${index}`}
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
