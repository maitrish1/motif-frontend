import axios from "axios";
import { API_URL } from "../Constants/URL";

export const allEmails = async () => {
  const temp = await axios.get(`${API_URL}`);
  const res = await temp;
  return res.data;
};

export const fetchEmailBody = async (id) => {
  const temp = await axios.get(`${API_URL}/${id}`);
  const res = await temp;
  return res.data;
};
