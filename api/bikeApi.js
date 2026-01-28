import axios from "axios";
//  192.168.68.203
// 192.168.68.170
const API = axios.create({
  baseURL: "http://192.168.1.5:5000/api", // 🔁 change IP
  headers: {
    "Content-Type": "application/json",
  },
});

export const BikeAdd = async (bikeData) => {
  try {
    const response = await API.post("/bikes/add", bikeData);
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};

export const getBikes = async () => {
  try {
    const response = await API.get("/bikes/fetchAllBike");
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};

export const BikeDelete = async (bikeId) => {
  try {
    const response = await API.delete(`/bikes/${bikeId}`);
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};

export const BikeUpdate = async (id, bikeData, bike) => {
  console.log("id", id, bike);
  try {
    const response = await API.put(`/bikes/${id}`, bikeData);
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};

export const addBooking = async (bookingData) => {
  try {
    const response = await API.post("/booking/createBooking", bookingData);
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};
export const getBooking = async () => {
  try {
    const response = await API.post("/booking/getBookings");
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};
export const bookingUpdate = async (id, bookingData) => {
  console.log(id, bookingData, "data");
  try {
    const response = await API.put(`/booking/${id}`, bookingData);
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};
export const fetchUserDetails = async (userData) => {
  try {
    const response = await API.post("/user/userDetails", userData);
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};
export const getFetchUserDetails = async () => {
  try {
    const response = await API.get("/user/userDetails");
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};
export const fetchUserBooking = async (user) => {
  try {
    const response = await API.get(`/booking/user-booking/${user}`);
    return response; // ✅ returns user + booking row
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err; // propagate error to caller
  }
};

export const UpdateUserAndBooking = async (user, userData) => {
  try {
    const response = await API.post(`/user/editUserDetails/${user}`, userData);
    return response; // ✅ returns user + booking row
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err; // propagate error to caller
  }
};

export const getAmountAnalytics = async (type) => {
  try {
    const response = await API.get("/booking/amount-analytics", {
      params: { type }, // 👈 this is the fix
    });
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};

export const createAdmin = async (form) => {
  try {
    const response = await API.post("/admin/create", form);
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};

export const loginAdmin = async (form) => {
  try {
    const response = await API.post("/admin/login", form);
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};
