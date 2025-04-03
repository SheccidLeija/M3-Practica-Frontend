import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useState } from "react";

export default function SignUpPage() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [terminosAceptados, setTerminosAceptados] = useState(false);

  const registrarUsuario = () => {
    if (!nombre || !apellido || !usuario || !contraseña || !terminosAceptados) {
      alert("Por favor, completa todos los campos y acepta los términos.");
      return;
    }
    const usuariosPrevios = JSON.parse(localStorage.getItem("users")) || [];
    const nuevoUsuario = { username: usuario, nombre, apellido };
    const usuariosActualizados = [...usuariosPrevios, nuevoUsuario];


    localStorage.setItem("users", JSON.stringify(usuariosActualizados));
    alert("Usuario registrado correctamente.");


    setNombre("");
    setApellido("");
    setUsuario("");
    setContraseña("");
    setTerminosAceptados(false);
  };

  return (
    <Stack justifyContent="flex-start" alignItems="center">
      <Stack width="85%" maxWidth="500px" m={1.5}>
        <Stack textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            Registrarme
          </Typography>
          <Typography variant="h6">
            Ya tienes cuenta? <Link to="/log-in">Iniciar Sesión</Link>
          </Typography>
        </Stack>

        <Stack my={3}>
          <Button variant="contained" startIcon={<GoogleIcon />}>
            Iniciar Sesión con Google
          </Button>
        </Stack>

        <Box>
          <Divider sx={{ color: "gray" }}>o</Divider>
        </Box>

        <Grid container my={2} spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </Grid>
        </Grid>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={terminosAceptados} onChange={(e) => setTerminosAceptados(e.target.checked)} />}
            label={
              <Typography>
                Estoy de acuerdo con los <Link to="/Terms">Términos y Condiciones</Link>
              </Typography>
            }
          />
        </FormGroup>

        <Stack my={3}>
          <Button variant="contained" onClick={registrarUsuario}>
            Registrarme
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
