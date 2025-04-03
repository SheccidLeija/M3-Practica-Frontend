import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Button, Checkbox, FormControlLabel, FormGroup, 
  Grid, Stack, TextField, Typography 
} from '@mui/material';

export default function LogInPage() {
  const navigate = useNavigate();
  
  // Estado para usuario y contraseña
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  // Credenciales correctas (puedes cambiarlo por un sistema más seguro)
  const CORRECT_USER = 'USUARIO';
  const CORRECT_PASS = 'contraseña';

  const handleLogin = () => {
    if (user === CORRECT_USER && password === CORRECT_PASS) {
      navigate('/dashboard'); // Redirige al dashboard
    } else {
      alert('Usuario o contraseña incorrectos'); // Mensaje de error
    }
  };

  return (
    <Stack justifyContent="flex-start" alignItems="center" m={1.5}>
      <Stack width="85%" maxWidth="500px" m={1.5}>
        <Stack textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            Iniciar Sesión
          </Typography>
        </Stack>

        <Grid container my={2} spacing={2}>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              label="Usuario (PD:USUARIO)" 
              value={user} 
              onChange={(e) => setUser(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              type="password" 
              label="Contraseña (PD: contraseña)" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Grid>
        </Grid>

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Recordar en este dispositivo?" />
        </FormGroup>

        <Stack my={3}>
          <Button variant="contained" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
