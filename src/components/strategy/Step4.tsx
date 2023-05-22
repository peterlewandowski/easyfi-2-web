import { useContext, useEffect } from "react";
import { Cascader } from "antd";
import { InputContext, StrategiesContext } from "../../context";

export default function Step4() {
  const { userInput, setUserInput, setAmounts } = useContext(InputContext);
  const { currentStrategy } = useContext(StrategiesContext);

  useEffect(() => {
    if (currentStrategy) {
      setAmounts(currentStrategy.strategy.asset);
    }
  }, [currentStrategy, setAmounts]);

  const options = [
    { value: 10, label: "$10" },
    { value: 20, label: "$20" },
    { value: 50, label: "$50" },
    { value: 100, label: "$100" },
    { value: 200, label: "$200" },
    { value: 500, label: "$500" },
  ];

  return (
    <Cascader
      placeholder={currentStrategy?.strategy.amount || "How much?"}
      defaultValue={currentStrategy?.strategy.amount || userInput.amount}
      options={options}
      onChange={(value) => setUserInput({ ...userInput, amount: value })}
    />
  );
}
