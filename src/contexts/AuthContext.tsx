import { User } from '@supabase/supabase-js';
import { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  user: User | null;
  setAuth: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const setAuth = (user: User | null) => {
    setUser(user);
  };

  return <AuthContext.Provider value={{ user, setAuth }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
