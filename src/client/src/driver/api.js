import axios from 'axios';
import { API_URL } from '@/env';

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  responseType: 'json',
  withCredentials: true,
});

const getCSRFToken = () => axiosClient.get('/api/csrf_token');

const adjustRequestCallOptions = ({ params, onSuccess, onError }) => {
  params = typeof params === 'object' ? params : {};
  onSuccess = typeof onSuccess === 'function' ? onSuccess : (res) => res;
  onError =
    typeof onError === 'function'
      ? onError
      : (e) => {
          throw e;
        };
  return {
    params,
    onSuccess,
    onError,
  };
};

export const get = (url, options = {}) => {
  const { params, onSuccess, onError } = adjustRequestCallOptions(options);
  return axiosClient.get(url, { params }).then(onSuccess).catch(onError);
};

export const post = (url, options = {}) => {
  return getCSRFToken().then((res) => {
    const config = {
      headers: { 'X-CSRF-TOKEN': res.data.token },
    };
    const { params, onSuccess, onError } = adjustRequestCallOptions(options);
    return axiosClient.post(url, params, config).then(onSuccess).catch(onError);
  });
};
