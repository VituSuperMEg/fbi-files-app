import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.18.11:1001/",
});

// // Interceptor de requisição
// api.interceptors.request.use(
//   (config) => {
//     // Pegar o token do localStorage (ou AsyncStorage, dependendo de onde está armazenado)
//     const token = AsyncStorage.getItem("access_token");

//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Interceptor de resposta
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       // Token expirado ou inválido
//       console.error("Token expirado ou inválido", error.response);

//       // Resetar o estado de autenticação e redirecionar
//       const { logout } = useAuth();
//       logout(); // Limpar o estado de usuário no contexto

//       // Apagar o token armazenado
//       await AsyncStorage.removeItem("access_token");

//       // Aqui você pode redirecionar para a tela de login ou outra ação
//       // Exemplo para React Navigation:
//       // navigation.navigate("Login");

//       // Retornar erro para ser tratado
//       return Promise.reject(error);
//     }

//     // Para outros tipos de erro, você pode apenas rejeitar o erro normalmente
//     return Promise.reject(error);
//   }
// );
