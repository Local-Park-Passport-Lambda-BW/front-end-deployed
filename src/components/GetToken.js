import axios from "axios";
export default function withAuth() {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
  return instance;
}
// GetToken().post("http local host");"
// GetToken().delete;
// GetToken().put;
// import GetToken from "./componenet/GetToken"
