import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import styles from "./index.module.scss";

function ItemCard({ id, name, location, measurements, indexes }) {
  return (
    <div className={styles.ItemCard}>
      <Typography variant="h5">
        {id} - {name}
      </Typography>
      <p>
        Lon: {location.lon} - Lat: {location.lat}
      </p>
      <ul>
        <li>Contaminante: {measurements?.pollutant}</li>
        <li>Valor: {measurements?.value}</li>
        <li>Unidad: {measurements?.unit}</li>
        <li>
          Tiempo:{" "}
          {measurements?.time
            ? moment(new Date(measurements?.time)).format("YYYY-MM-DD HH:mm:ss")
            : "No encontrado"}
        </li>
      </ul>
      <ul>
        <li>Escala: {indexes?.scale}</li>
        <li>Valor: {indexes?.value}</li>
        <li>
          {`Tiempo de cálculo: `}
          {indexes?.calculationTime
            ? moment(new Date(indexes?.calculationTime)).format(
                "YYYY-MM-DD HH:mm:ss"
              )
            : "No encontrado"}
        </li>
      </ul>
    </div>
  );
}

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.string),
  measurements: PropTypes.objectOf(PropTypes.string),
  indexes: PropTypes.objectOf(PropTypes.string),
};

export default React.memo(ItemCard);
