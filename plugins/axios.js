import axios from 'axios';

export const requestInterceptor = async (config) => {
  const commons = config.headers;
  const { customHeaders = {} } = config;

  config.headers = {
    ...commons,
    ...customHeaders,
  };
  return config;
};

export const responseInterceptor = (response = []) => {
  // Do something with response data
  return response;
};

export const errorInterceptor = (error) => {
  const { response = {}, request = {} } = error;
  const { status, statusText, data = {}, headers } = response;
  const { __rollbar_xhr: xhrInfo = {} } = request;
  const { error: responseError, errors = [] } = data;
  const errorToShow = responseError || errors?.toString();

  logger.error(statusText || errorToShow, {
    attributes: {
      url: xhrInfo.url,
      httpMethod: xhrInfo.method,
      duration: (xhrInfo.end_time_ms - xhrInfo.start_time_ms) / 1000,
      statusCode: status,
      headers,
    },
  });

  return { ok: false, response };
};

export default defineNuxtPlugin(() => {
  const http = axios.create({});

  http.defaults.validateStatus = status => status === 401 || (status >= 200 && status < 400);
  http.interceptors.request.use(requestInterceptor);
  http.interceptors.response.use(responseInterceptor, errorInterceptor);

  return {
    provide: {
      http,
    },
  };
});
