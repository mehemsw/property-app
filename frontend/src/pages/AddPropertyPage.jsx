import { React, useState, useEffect } from "react";
import * as api from "../api/authApi";

const AddPropertyPage = ({ userToken }) => {
  const [formData, setFormData] = useState({
    street_address: "",
    city: "",
    state: "",
    purchase_price: null,
    beds: null,
    baths: null,
    square_feet: null,
    zipcode: null,
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
    async function performCreateProperty() {
      await api.createProperty(userToken, formData);
    }
    if (userToken) {
      performCreateProperty();
      setSubmitted(!submitted);
    }
  };
  return (
    <>
      <h2>Add a Property</h2>
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
      {submitted && <h3>Property Added!</h3>}
    </>
  );
};

export default AddPropertyPage;
