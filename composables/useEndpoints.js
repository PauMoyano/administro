export default function () {
  const { backendUrl } = useRuntimeConfig().public;
  const BASE_PATH = `${backendUrl}`;

  return {
    auth: {
      register: `${BASE_PATH}/signup`,
      login: `${BASE_PATH}/login`,
    },
  };
}
