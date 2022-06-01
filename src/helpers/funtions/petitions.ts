import axios from "axios";
import { API_URL } from "../const/api";

export const postUser = async (dataParam: any, url: string) => {
  let body = {
    email: dataParam.email.value,
    password: dataParam.password.value,
  };
  const config = {
    headers: { "Conte.nt-Type": "application/json" }
  };
  
  const peticion = await axios.post(
    `${API_URL}${url}`,
    body,
    config
  );
  const { data } = peticion;
  return data;
};

export const getPeticion = async (url:string, config:any) => {
  const peticion = await axios.get(`${API_URL}${url}`, config);
  const {data} = peticion;

  return data;
}

export const createSite = async (data:any) => {
  const { latitude, longitude, latitudeDelta, longitudeDelta } = data.location;
  const { closeTimes, openTimes, country, description, name, faceMask, statusOpen, vaccineCovid, image, createdBy } = data.site;

  const config = {
    headers: { 'Authorization': `Bearer ${data.jwt.token}` },
  };
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("description", description.value);
    formData.append("faceMask", faceMask.value);
    formData.append("statusOpen", statusOpen.value);
    formData.append("open", openTimes.value.toString());
    formData.append("close", closeTimes.value.toString());
    formData.append("country", country.value);
    formData.append("vaccineCovid", vaccineCovid.value);
    formData.append("created_by", createdBy);
    formData.append("image", image.value);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("latitudeDelta", latitudeDelta);
    formData.append("longitudeDelta", longitudeDelta);

    try {
      const response = await fetch(
        `${API_URL}sites/create`,
        {
          method: 'POST',
          body: formData,
          headers: config.headers
        }
      ).then(resp => resp.json())

      return response;
    } catch(e){
        return e;
    }
}

export const updateSite = async (data:any) => {
  const { latitude, longitude, latitudeDelta, longitudeDelta } = data.location;
  const { closeTimes, openTimes, country, description, name, faceMask, statusOpen, vaccineCovid, image, createdBy } = data.site;

  const config = {
    headers: { 'Authorization': `Bearer ${data.jwt.token}` },
  };
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("description", description.value);
    formData.append("faceMask", faceMask.value);
    formData.append("statusOpen", statusOpen.value);
    formData.append("open", openTimes.value.toString());
    formData.append("close", closeTimes.value.toString());
    formData.append("country", country.value);
    formData.append("vaccineCovid", vaccineCovid.value);
    formData.append("created_by", createdBy);
    formData.append((image.value?.name && image.value?.type) ? "image" : "imgUrl", (image.value?.name && image.value?.type) ? image.value : image.value.uri);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("latitudeDelta", latitudeDelta);
    formData.append("longitudeDelta", longitudeDelta);

    try {
      const response = await fetch(
        `${API_URL}sites/update/${data.site._id}`,
        {
          method: 'PUT',
          body: formData,
          headers: config.headers
        }
      ).then(resp => resp.json())

      return response;
    } catch(e){
        return e;
    }
}

export const verifiedCode = async (dataParam: any, url: string) => {
  let body = {
    email: dataParam.email.value,
    code: dataParam.code.value,
  };
  const config = {
    headers: { "Conte.nt-Type": "application/json" }
  };
  
  const peticion = await axios.put(
    `${API_URL}${url}`,
    body,
    config
  );
  const { data } = peticion;
  return data;
};

export const deletePeticion = async (url:string, config:any) => {
  const peticion = await axios.delete(`${API_URL}${url}`, config);
  const {data} = peticion;

  return data;
}