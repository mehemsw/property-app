import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import * as api from "../api/authApi";
import { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const PropertyListing = ({ property, userToken }) => {
  const [haveGeo, setHaveGeo] = useState(false);
  const [haveWalk, setHaveWalk] = useState(false);
  const [geo, setGeo] = useState({});
  const [walkscore, setWalkscore] = useState(null);

  const handleDelete = (e) => {
    e.preventDefault();
    async function performDeleteProperty() {
      await api.deleteProperty(userToken, property.id);
    }
    if (userToken) {
      performDeleteProperty();
    }
  };

  const handleGeoRequest = (e) => {
    e.preventDefault();
    async function performGetGeoRequest() {
      const coords = await api.getGeoRequest(userToken, property.id);
      setGeo({
        street_address: property.street_address,
        latitude: coords.y,
        longitude: coords.x,
      });
    }
    async function performUpdatePropertyGeo() {
      await api.updatePropertyGeo(userToken, geo, property.id);
    }
    if (userToken) {
      performGetGeoRequest();
    }
    performUpdatePropertyGeo();
  };

  const handleWalkRequest = (e) => {
    e.preventDefault();
    async function performGetWalkRequest() {
      const resp = await api.getWalkscoreRequest(userToken, property.id);
      setWalkscore(resp.walkscore);
    }
    if (userToken) {
      performGetWalkRequest();
    }
    setHaveWalk(!haveWalk)
  };

  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {property.street_address}, {property.city}, {property.state}{" "}
            {property.zipcode}
          </Typography>
          <Typography variant="body3" color="text.secondary" sx={{ mr: 2 }}>
            ${property.purchase_price}
          </Typography>
          <Typography variant="body3" color="text.secondary" sx={{ mr: 2 }}>
            {property.beds} beds
          </Typography>
          <Typography variant="body3" color="text.secondary" sx={{ mr: 2 }}>
            {property.baths} baths
          </Typography>
          <Typography variant="body3" color="text.secondary" sx={{ mr: 2 }}>
            {property.square_feet} sq ft
          </Typography>
          {haveWalk && (
            <Typography variant="body3" color="text.secondary" sx={{ mr: 2 }}>
              Walkscore: {walkscore}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link
              to={`/edit-property/${property.id}`}
              state={{ property: property }}
            >
              Edit Property
            </Link>
          </Button>
          <Button onClick={handleDelete} size="small">
            Delete Property
          </Button>
          <Button onClick={handleGeoRequest} size="small">
            Get Coordinates
          </Button>
          <Button onClick={handleWalkRequest} size="small">
            Get WalkScore
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default PropertyListing;
