import { api } from "@/app/services/api";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigation, useRouter } from "expo-router";

interface User {
  id: number;
  nome: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: any) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const router = useRouter();

  const logout = () => {
    setUser(null);
    setToken(null);
    router.push("/");
  };

  const login = async (email: string, senha: string) => {
    try {
      const res = await api.post("users/login", {
        email,
        senha,
      });
      const decoded = jwtDecode<{ email: string; id: number; nome: string }>(
        res.data.access_token
      );
      setUser({
        email: decoded.email,
        id: decoded.id,
        nome: decoded.nome,
      });
      setToken(res.data.access_token);
      router.push("/home");
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    }
  };

  const isAuthenticated = !!user;

  useEffect(() => {
    if (token) {
      router.push("/home");
    } else {
      router.push("/");
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, logout, isAuthenticated, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
