import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const getContacts = async () => {
  const res = await axios.get(`${baseUrl}/contact/`);
  return res.data;
};

const contactService = {
  getContacts,
};

export default contactService;
