export const usePostUser = async (body) => {
  const { auth } = useEndpoints();
  const nuxtApp = useNuxtApp();

  try {
    const response = await nuxtApp.$http.post(`${auth.register}`, body);
    if (response.status === 200) {
      localStorage.setItem('token', response.headers.get('Authorization'))
    }
    const data = response.data;
    return data
  } catch (e){
    console.log(e)
  }

  return {
    user: data,
  };
};
