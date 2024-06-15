import { React, useState } from "react";
import * as api from "../api/authApi";
import { useParams, useLocation } from "react-router-dom";

const EditPropertyPage = ({ userToken }) => {
  const { id } = useParams();
  const location = useLocation();
  const { property } = location.state;
  const [formData, setFormData] = useState({
    street_address: property.street_address,
    city: property.city,
    state: property.state,
    purchase_price: property.purchase_price,
    beds: property.beds,
    baths: property.baths,
    square_feet: property.square_feet,
    zipcode: property.zipcode,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    async function performEditProperty() {
      await api.updateProperty(userToken, formData, property.id);
    }
    if (userToken) {
      performEditProperty();
      setSubmitted(!submitted);
    }
  };
  return (
    <>
      <h2>Edit a Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="street_address">Street Address: </label>
          <input
            type="text"
            id="street_address"
            name="street_address"
            value={formData.street_address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">State: </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="purchase_price">Purchase Price: </label>
          <input
            type="number"
            id="purchase_price"
            name="purchase_price"
            value={formData.purchase_price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="beds">Beds: </label>
          <input
            type="number"
            id="beds"
            name="beds"
            value={formData.beds}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="baths">Baths: </label>
          <input
            type="number"
            id="baths"
            name="baths"
            value={formData.baths}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="square_feet">Sq Ft: </label>
          <input
            type="number"
            id="square_feet"
            name="square_feet"
            value={formData.square_feet}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zip Code: </label>
          <input
            type="number"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && <h3>Property Edited!</h3>}
    </>
  );
};

export default EditPropertyPage;
