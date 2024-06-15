import { React, useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPropertyPage from "./pages/AddPropertyPage";
import UpdatePropertyPage from "./pages/EditPropertyPage";
import MainLayout from "./layouts/MainLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [userToken, setUserToken] = useState(null);

  const handleToken = (token) => {
    setFormData({ username: "", password: "" });
    setUserToken(token);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<HomePage userToken={userToken}/>} />
        <Route path="/add-property" element={<AddPropertyPage userToken={userToken}/>} />
        <Route path="/edit-property/:id" element={<UpdatePropertyPage userToken={userToken}/>} />
        <Route
          index
          element={
            <SignUp handleInputChange={handleInputChange} formData={formData} />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              handleInputChange={handleInputChange}
              formData={formData}
              handleToken={handleToken}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
