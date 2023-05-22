import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export interface Strategy {
  asset: string;
  amount: number;
  frequency: string;
  type: string;
  description: string;
}

export interface UserStrategy {
  id: string;
  strategy: Strategy;
  created_at: { _seconds: number };
}

interface StrategiesContextType {
  userStrategies: UserStrategy[] | undefined;
  setUserStrategies: Dispatch<SetStateAction<UserStrategy[] | undefined>>;
  currentStrategy: UserStrategy | undefined | null;
  setCurrentStrategy: Dispatch<SetStateAction<UserStrategy | undefined | null>>;
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
  const [userStrategies, setUserStrategies] = useState<UserStrategy[] | undefined>();
  const [currentStrategy, setCurrentStrategy] = useState<UserStrategy | undefined | null>();

  const value = {
    userStrategies,
    setUserStrategies,
    currentStrategy,
    setCurrentStrategy,
  };

  return <Provider value={value}>{children}</Provider>;
};
