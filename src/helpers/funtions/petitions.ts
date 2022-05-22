import axios from "axios";

export const postUser = async (dataParam: any, url: string) => {
  let body = {
    email: dataParam.email.value,
    password: dataParam.password.value,
  };
  const config = {
    headers: { "Conte.nt-Type": "application/json" },
    'Authorization': `Bearer ${process.env.TOKEN}`,
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

export const createSite = async (data:any) => {
  const { latitude, longitude, latitudeDelta, longitudeDelta } = data.location;
  const { closeTimes, openTimes, country, description, name, faceMask, statusOpen, vaccineCovid, image, createdBy } = data.site;
  const config = {
    headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyODI4NjVlMmZjZWRkMTk0ZDAzZTBiMSIsImVtYWlsIjoicm9jaGFtb3JhbjFAZ21haWwuY29tIiwiZ29vZ2xlIjpmYWxzZSwidmVyaWZpZWQiOjAsImNyZWF0ZWRBdCI6IjIwMjItMDUtMTZUMTc6MTQ6MDYuNjU2WiIsInVwZGF0ZWRBdCI6IjIwMjItMDUtMTZUMTc6MTQ6MzYuNzk2WiIsIl9fdiI6MH0sImlhdCI6MTY1MzA3MzM0MX0.MNbmUs7zzpawpWWemBmLLaj0sNPdPe_1QYdy-HSZ7BU` },
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
      const data = await fetch(
        `http://192.168.1.6:5500/api/sites/create`,
        {
          method: 'POST',
          body: formData,
          headers: config.headers
        }
      ).then(resp => resp.json())

      return data;
    } catch(e){
      console.log(e)
        return e;
    }
}