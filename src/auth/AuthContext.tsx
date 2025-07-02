import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  FC,
} from 'react';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user from localStorage on initial app load
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user from localStorage', error);
        localStorage.removeItem('currentUser');
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
