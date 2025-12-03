import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_SOME_KEY}`,
  },
});

export const getNews = async (locale: string) => {
  const res = await api.get(`/muchnews?locale=${locale}&populate=*`);
  return res.data;
};

export const getWeb = async () => {
  const res = await api.get(`https://balanced-flame-d5bc834010.strapiapp.com/api/`);
  return res.data;
}

export const getIdNews = async (id: string, locale: string) => {
  const res = await api.get(`/muchnews/${id}?locale=${locale}&populate=*`);
  return res.data;
};
