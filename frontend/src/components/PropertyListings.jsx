import { useState, useEffect } from "react";
import PropertyListing from "./PropertyListing";
import * as api from "../api/authApi";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const PropertyListings = ({ userToken }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function performGetProperties() {
      const props = await api.getProperties(userToken);
      setProperties(props);
    }
    if (userToken) {
      performGetProperties();
    }
  }, []);

  return (
    <Box sx={{ padding: 3, borderRadius: "10px", backgroundColor: "#f0f0f0" }}>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Browse Properties
          </Typography>
        </Grid>

        {properties.map((property) => (
          <PropertyListing key={property.id} property={property} userToken={userToken}/>
        ))}
      </Grid>
    </Box>
  );
};
export default PropertyListings;
