import { useState, useEffect } from "react";
import { Container, Typography, List, ListItem, Paper, Box, Grid, Card, CardContent, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      setUsers(storedUsers);
    } catch (error) {
      console.error("Error al cargar usuarios desde localStorage:", error);
    }
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}>
            Dashboard
          </Typography>
          <Button component={Link} to="/" sx={{ color: "white", fontSize: "1.2rem" }}>
            Home
          </Button>
          <Button component={Link} to="/dashboard" sx={{ color: "white", fontSize: "1.2rem" }}>
            Dashboard
          </Button>
          <Button component={Link} to="/contacto" sx={{ color: "white", fontSize: "1.2rem" }}>
            Contacto
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: "80px", padding: "20px" }}>
        <Container maxWidth="xl" sx={{ py: 4, textAlign: "center" }}>
          <Typography variant="h4">Bienvenido al Dashboard</Typography>
          <Typography variant="h6">Lista de Usuarios Registrados:</Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">Usuarios Totales</Typography>
                  <Typography variant="h4" align="center">{users.length}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">Usuarios Activos</Typography>
                  <Typography variant="h4" align="center">{users.length}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Paper elevation={6} sx={{ padding: 3, mt: 3 }}>
            <List>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <ListItem key={index}>
                    {user.nombre} {user.apellido} ({user.username})
                  </ListItem>
                ))
              ) : (
                <Typography>No hay usuarios registrados.</Typography>
              )}
            </List>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
