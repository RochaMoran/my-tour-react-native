import axios from "axios";
export const postUser = async (dataParam: any, url: string) => {
  let body = {
    email: dataParam.email.value,
    password: dataParam.password.value,
  };

  const config = {
    headers: { "Conte.nt-Type": "application/json" },
  };

  const peticion = await axios.post(
    `http://192.168.1.6:5500/api/${url}`,
    body,
    config
  );
  const { data } = peticion;
  return data;
};

export const getPeticion = async (url:string, config:any) => {
  const peticion = await axios.get(`http://192.168.1.6:5500/api/${url}`, config);
  const {data} = peticion;

  return data;
}