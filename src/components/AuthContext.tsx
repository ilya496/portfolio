import { authMe } from "@/api";
import { User } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, isLoading, error, refetch } = useQuery<User>({
    queryKey: ["auth-me"],
    queryFn: authMe,
    retry: false,
    staleTime: Infinity,
  });

  return (
    <AuthContext.Provider
      value={{
        user: data || null,
        isLoading,
        error,
        refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
