import axios from "axios";
//  192.168.68.203
// 192.168.68.170
const API = axios.create({
  baseURL: "http://192.168.1.11:5000/api", // 🔁 change IP
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

export const getBikes = async (adminId) => {
  try {
    console.log(adminId, "getBooking");
    const response = await API.get(`/bikes/fetchAllBike/${adminId}`);
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};

export const BikeDelete = async (bikeId, adminId) => {
  try {
    const response = await API.delete(`/bikes/${bikeId}`, {
      data: { adminId },
    });
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

export const getBooking = async (adminId) => {
  try {
    console.log(adminId, "getBooking");
    const response = await API.get(`/booking/getBookings/${adminId}`);
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
    const response = await API.post(`/user/userDetails`, userData);
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};

export const getFetchUserDetails = async (adminId) => {
  try {
    const response = await API.get(`/user/userDetails/${adminId}`);
    return response.data;
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err;
  }
};

export const fetchUserBooking = async (user, data) => {
  try {
    const response = await API.post(`/booking/user-booking/${user}`, data);
    return response; // ✅ returns user + booking row
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err; // propagate error to caller
  }
};

export const UpdateUserAndBooking = async (user, userData) => {
  try {
    const response = await API.post(
      `/user/editUserDetails/${user}`,
      userData,
      // 🔐 important
    );
    return response; // ✅ returns user + booking row
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err; // propagate error to caller
  }
};

export const getAmountAnalytics = async (type, adminId) => {
  try {
    const response = await API.get("/booking/amount-analytics", {
      params: { type, adminId },
      // 👈 this is the fix
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
