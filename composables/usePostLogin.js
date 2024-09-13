export const usePostLogin = async (body) => {
  const { auth } = useEndpoints();
  const nuxtApp = useNuxtApp();

  try {
    const response = await nuxtApp.$http.post(`${auth.login}`, body);
    if (response.status === 200) {
      localStorage.setItem('token', response.headers.get('Authorization'))
    }
    const data = response.data;
    return data
  } catch (e){
    console.log(e)
  }

  return {
    logger: data,
  };
};
