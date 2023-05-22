import { useContext, useEffect } from "react";
import { Cascader } from "antd";
import { InputContext, StrategiesContext } from "../../context";

export default function Step2() {
  const { userInput, setUserInput, setFrequencies } = useContext(InputContext);
  const { currentStrategy } = useContext(StrategiesContext);

  useEffect(() => {
    if (currentStrategy) {
      setFrequencies(currentStrategy.strategy.frequency);
    }
  }, [currentStrategy, setFrequencies]);

  const options = [
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
  ];

  return (
    <Cascader
      placeholder={currentStrategy?.strategy.frequency || "How often?"}
      defaultValue={currentStrategy?.strategy.frequency || userInput.frequency}
      options={options}
      onChange={(value) => setUserInput({ ...userInput, frequency: value })}
    />
  );
}
