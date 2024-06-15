import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const HomeCards = () => {
  return (
    <Box sx={{ padding: 3, borderRadius: "10px", backgroundColor: "#f0f0f0" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <Typography variant="h5" component="h2" gutterBottom>
              For Property Manager
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Browse current properties
            </Typography>
            <Link to="/properties">Browse Properties</Link>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <Typography variant="h5" component="h2" gutterBottom>
              For Owners
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Add a property to your portfolio
            </Typography>
            <Link to="/add-property">Add Property</Link>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeCards;
