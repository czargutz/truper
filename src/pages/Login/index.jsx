import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import styles from "./index.module.scss";

import { users } from "./constants";

import { saveSession } from "../../reducer";

function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [form, setForm] = useState({});
  const [error, setError] = useState(null);

  const handleOnChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleLogin = () => {
    setError(null);
    const userBD = users.find((user) => user.user === form.user);
    if (userBD && userBD.password === form.password) {
      dispatch(saveSession(form));
      navigation("/home");
    } else {
      setError("Invalid user");
    }
  };

  return (
    <div className={styles.Login}>
      <div className={styles.Card}>
        <Typography variant="h5" align="center">
          Bienvenido
        </Typography>
        <TextField
          label="Usuario"
          placeholder="Por favor ingresa tu email"
          margin="normal"
          onChange={handleOnChange}
          name="user"
        />
        <TextField
          label="Contraseña"
          placeholder="Por favor ingresa tu contraseña"
          margin="normal"
          onChange={handleOnChange}
          name="password"
        />
        <Button
          variant="outlined"
          size="large"
          sx={{ marginTop: "40px" }}
          onClick={handleLogin}
        >
          Entrar
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
      </div>
    </div>
  );
}

export default React.memo(Login);
