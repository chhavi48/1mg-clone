import { USEROTP, USERNAME } from "./actiontype";
import axios from "axios";
export const GETDATA = "GETDATA";
export const DESDATA = "DESDATA";
export const SORTDATA = "SORTDATA";
export const BRANDFILTER = "BRANDFILTER";
export const DISCOUNTFILTER = "DISCOUNTFILTER";
export const CARTDATA = "CARTDATA";

export const getdata = (payload) => ({
  type: GETDATA,
  payload,
});

export const desdata = (payload) => ({
  type: DESDATA,
  payload,
});

export const sortdata = (payload) => ({
  type: SORTDATA,
  payload,
});

export const filterdatabrand = (payload) => ({
  type: BRANDFILTER,
  payload,
});

export const filterdatadiscount = (payload) => ({
  type: DISCOUNTFILTER,
  payload,
});

export const cartdata = (payload) => ({
  type: CARTDATA,
  payload,
});

export const userotp = (payload) => {
  return {
    type: USEROTP,
    payload,
  };
};

export const username = (payload) => {
  return {
    type: USERNAME,
    payload,
  };
};

export const fetchdata = () => async (dispatch) => {
  let res = await axios.get(
    "https://unit-6projectbackend.herokuapp.com/alldata"
  );
  dispatch(getdata(res.data.data));
};

export const fetchdes = (payload) => async (dispatch) => {
  let res = await axios.get(
    `https://unit-6projectbackend.herokuapp.com/data/${payload}`
  );
  dispatch(desdata(res.data.data));
};

export const sortproducts = (payload) => async (dispatch) => {
  let res = await axios.get(
    "https://unit-6projectbackend.herokuapp.com/alldata"
  );
  let arr = res.data.data;
  if (payload == "rel") {
    dispatch(sortdata(arr));
  } else if (payload == "plth") {
    arr.sort((a, b) => +a.price - +b.price);
    dispatch(sortdata(arr));
  } else if (payload == "phtl") {
    arr.sort((a, b) => +b.price - +a.price);
    dispatch(sortdata(arr));
  } else if (payload == "rlth") {
    arr.sort((a, b) => +a.ratings - +b.ratings);
    dispatch(sortdata(arr));
  } else if (payload == "rhtl") {
    arr.sort((a, b) => +b.ratings - +a.ratings);
    dispatch(sortdata(arr));
  }
};

export const fetchfilterbrand = (payload) => async (dispatch) => {
  let res = await axios.get(
    `https://unit-6projectbackend.herokuapp.com/filter?brand=${payload}`
  );
  dispatch(filterdatabrand(res.data.data));
};

export const fetchfilterdiscount = (payload) => async (dispatch) => {
  let res = await axios.get(
    `https://unit-6projectbackend.herokuapp.com/filter?discount=${payload}`
  );
  dispatch(filterdatadiscount(res.data.data));
};

export const AddToCart = (payload) => async (dispatch) => {
  let res = await axios.post(
    `https://unit-6projectbackend.herokuapp.com/postcart`,
    payload
  );
  console.log(res);
  dispatch(fetchcart(payload.username));
  alert("Product added successfully!");
};

export const fetchcart = (username) => async (dispatch) => {
  let res = await axios.get(
    `https://unit-6projectbackend.herokuapp.com/getcart/${username}`
  );
  console.log(res.data);
  dispatch(cartdata(res.data));
};
