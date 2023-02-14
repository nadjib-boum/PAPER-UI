import axios from 'axios';

export const postAPI = async (url: string, data: object, token?: string) => {
  const res = await axios.post (`/api/${url}`, data, {
    headers: {
      Authorization: token
    }
  })
  return res;
}