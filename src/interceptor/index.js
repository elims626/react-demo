import axios from 'axios';
import { Message } from '@/utils';

axios.defaults.baseURL = '/';

axios.interceptors.request.use(
    (config) => config,
    (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (res) => {
    if (res && res.data && res.data.code) {
      if (res.data.code !== '0') {
        Message({
          type: 'error',
          content: res.data.msg,
        });
      }
    }
    return res;
  },
  (err) => {
    if (err.response === 'undefined') {
      window.location.reload();
    } else {
      Message({
        type: 'error',
        content: err,
      });
    }
    return Promise.reject(err);
  },
);

export default axios;
