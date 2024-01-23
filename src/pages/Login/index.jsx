import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

import styles from "./index.module.scss";

import { users } from "./constants";

function Login() {
  const navigation = useNavigate();

  const [form, setForm] = useState({});

  const handleOnChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleLogin = () => {
    const userBD = users.find((user) => user.user === form.user);
    if (userBD && userBD.password === form.password) {
      navigation("/home");
    } else {
      console.log("Invalid user");
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
      </div>
    </div>
  );
}

export default React.memo(Login);
