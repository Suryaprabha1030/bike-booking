import axios from "axios";
//  192.168.1.21
const API = axios.create({
  // baseURL: "http://192.168.1.21:5000/api", // 🔁 change IP
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchUserBooking = async (user) => {
  try {
    const response = await API.get(`/user-booking/${user}`);
    return response.data; // ✅ returns user + booking row
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
    throw err; // propagate error to caller
  }
};
