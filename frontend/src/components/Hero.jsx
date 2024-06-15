import React from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Define a dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
});

const Hero = ({
  title = "Manage Your Real Estate Properties",
  subtitle = "All the information you need. All in one place.",
}) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth={false} disableGutters>
        <Paper elevation={3} sx={{ p: 4, bgcolor: "background.paper" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "33vh",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              color="text.primary"
            >
              {title}
            </Typography>
            <Typography variant="h5" component="p" color="text.secondary">
              {subtitle}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Hero;
