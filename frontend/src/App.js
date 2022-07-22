import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cart } from "./components/Cart/cart";
import Navigation from "./components/Navigation/Navigation";
import Button from "./components/Button";
import { Address } from "./components/Cart/address";
import { Delivery } from "./components/Cart/delivery";
import Offer from "./components/Offer/Offer";
import { OrderSummary } from "./components/Cart/ordersummary";
import { Payment } from "./components/payment/payment";
import{Routes,Route} from "react-router-dom"
import {Login} from "./components/Signup/Login"
import{LoadingGmail} from "./components/Signup/LoadingGmail"
import{PrivateRouter} from "./Routes/PrivateRouter"
function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      {/* <Offer /> */}
      <Routes>
        <Route path="/" element={<PrivateRouter><Navigation/></PrivateRouter>}/>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/loading/:id" element={<LoadingGmail/>}></Route>
      </Routes>
}

export default App;
