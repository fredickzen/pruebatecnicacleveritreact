import Axios from "axios";
import { apiURl } from "../environtment";

//fetch

export const ApiUsersGetUsers = async () => {
  try {
    const response = await fetch(`${apiURl}User`);

    return response.json();
  } catch (e) {
    console.log("Ha ocurrido un error");
    console.log(e);
    return [];
  }
};

export const ApiUsersAddUser = async (user) => {
  try {
    const response = await fetch(`${apiURl}User`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return response.json();
  } catch (e) {
    console.log("Ha ocurrido un error");
    console.log(e);
    return [];
  }
};

//axios

export const ApiAxiosUsersGetUsers = async () => {
  try {
    const response = await Axios.get(`${apiURl}User`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Ha ocurrido un error");
      return [];
    }
  } catch (e) {
    console.log("Ha ocurrido un error");
    console.log(e);
    return [];
  }
};

export const ApiAxiosUsersAddUser = async (user) => {
  try {
    const response = await Axios.post(`${apiURl}User`, user);

    if (response.status === 201) {
      console.log(response);
      return response.data;
    } else {
      console.log("Ha ocurrido un error");
      return [];
    }
  } catch (e) {
    console.log("Ha ocurrido un error");
    console.log(e);
    return [];
  }
};
