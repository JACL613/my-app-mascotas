import axios from "axios";
const baseUrl = "https://api-mascotas-production.up.railway.app//api/adopciones";

export const postAdoptar = async ({ registro }) => {
  console.log(registro);

  const mascotas = axios.post(`${baseUrl}/`, registro);
  return mascotas.then((response) => response.data);
};
