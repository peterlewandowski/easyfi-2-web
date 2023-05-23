import { createContext, useState, ReactNode, useEffect } from "react";

interface InputContextType {
  userInput: any;
  setUserInput: any;
  types: any;
  setTypes: any;
  assets: any;
  setAssets: any;
  frequencies: any;
  setFrequencies: any;
  amounts: any;
  setAmounts: any;
  descriptions: any;
  setDescriptions: any;
}

interface InputContextProviderProps {
  children: ReactNode | ReactNode[] | null;
}

export const InputContext = createContext<InputContextType>(
  {} as InputContextType
);

export const InputContextProvider = ({
  children,
}: InputContextProviderProps) => {
  const { Provider } = InputContext;
  const [userInput, setUserInput] = useState({});
  const [types, setTypes] = useState([]);
  const [assets, setAssets] = useState([]);
  const [frequencies, setFrequencies] = useState([]);
  const [amounts, setAmounts] = useState(0);
  const [descriptions, setDescriptions] = useState([]);

  const value = {
    userInput,
    setUserInput,
    types,
    setTypes,
    assets,
    setAssets,
    frequencies,
    setFrequencies,
    amounts,
    setAmounts,
    descriptions,
    setDescriptions,
  };

  // useEffect(() => {
  //   setUserInput({
  //     type: types,
  //     asset: assets,
  //     frequency: frequencies,
  //     amount: amounts,
  //     description: descriptions,
  //   });
  // }, []);

  return <Provider value={value}>{children}</Provider>;
};
