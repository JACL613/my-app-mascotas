import axios from "axios";
const baseUrl = "https://api-mascotas-production.up.railway.app//api/mascotas";

export const getAllM = async () => {
  const mascotas = axios.get(`${baseUrl}/`);
  return mascotas.then((response) => response.data);
};
