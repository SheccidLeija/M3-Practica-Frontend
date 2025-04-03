
import { AppBar, Toolbar, Button, Box, Typography, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Contacto() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}>
            Contacto
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

      <Box sx={{ marginTop: "120px", textAlign: "center", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Sheccid Azeneth Soto Leija
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: "10px" }}>
            A00837322
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
