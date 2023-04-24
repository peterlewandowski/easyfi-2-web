import { createContext, useEffect, useState, ReactNode } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

interface UserContextType {
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
}

interface UserContextProviderProps {
  children: ReactNode;
}
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserContextProvider: React.FC<UserContextProviderProps> = (
  props
) => {
  const auth = getAuth();
  const [user, setUser] = useState<User | null | undefined>();
  const [loaded, setLoaded] = useState(false);
  const value: UserContextType = { user, setUser };
  const { Provider } = UserContext;
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoaded(true);
    });
  }, [auth]);

  if (!loaded) {
    return <></>;
  }

  return <Provider value={value}>{props.children}</Provider>;
};
