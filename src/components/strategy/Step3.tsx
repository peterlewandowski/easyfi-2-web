import { useContext, useEffect } from "react";
import { Cascader, Space, Typography } from "antd";
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
    <Space direction="vertical">
      <Typography.Title level={5}>How often:</Typography.Title>
      <Cascader
        placeholder={currentStrategy?.strategy.frequency || "Pick frequency"}
        defaultValue={
          currentStrategy?.strategy.frequency || userInput.frequency
        }
        options={options}
        onChange={(value) => setUserInput({ ...userInput, frequency: value })}
      />
    </Space>
  );
}
