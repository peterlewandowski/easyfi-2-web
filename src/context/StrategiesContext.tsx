import { createContext, useState, ReactNode } from "react";

interface StrategiesContextType {
  userStrategies: any;
  setUserStrategies: any;
  currentStrategy: any;
  setCurrentStrategy: any;
}

interface StrategiesContextProviderProps {
  children: ReactNode | ReactNode[] | null;
}

export const StrategiesContext = createContext<StrategiesContextType>(
  {} as StrategiesContextType
);

export const StrategiesContextProvider = ({
  children,
}: StrategiesContextProviderProps) => {
  const { Provider } = StrategiesContext;
  const [userStrategies, setUserStrategies] = useState();
  const [currentStrategy, setCurrentStrategy] = useState();

  const value = {
    userStrategies,
    setUserStrategies,
    currentStrategy,
    setCurrentStrategy,
  };

  return <Provider value={value}>{children}</Provider>;
};
