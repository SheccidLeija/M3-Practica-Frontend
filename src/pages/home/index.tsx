import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Stack justifyContent="flex-start" alignItems="center">
      <Stack width="85%" maxWidth="500px" m={1.5}>
        <Stack textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            Actividad Github1
          </Typography>
          <Typography variant="h6">Bienvenide</Typography>
        </Stack>

        <Stack my={3}>
          <Button variant="contained" onClick={() => navigate('/log-in')}>
            Iniciar Sesión
          </Button>
        </Stack>

        <Box>
          <Divider sx={{ color: 'gray' }}>o</Divider>
        </Box>

        <Stack my={3}>
          <Button variant="contained" onClick={() => navigate('/sign-up')}>
            Registrarme
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
