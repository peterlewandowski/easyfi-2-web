import { useContext, useEffect } from "react";
import { Radio, RadioChangeEvent, Space, Typography } from "antd";
import { InputContext, StrategiesContext } from "../../context";

export default function Step1() {
  const { userInput, setUserInput, types, setTypes } = useContext(InputContext);
  const { currentStrategy } = useContext(StrategiesContext);

  useEffect(() => {
    if (currentStrategy) {
      setTypes(currentStrategy.strategy.type);
    }
  }, [currentStrategy]);

  const handleChange = (e: RadioChangeEvent) => {
    setTypes(e.target.value);
    setUserInput({ ...userInput, type: e.target.value });
  };

  return (
    <>
      <Space direction="vertical">
        <Typography.Title level={5}>
          I would like to invest in:
        </Typography.Title>
        <Radio.Group onChange={handleChange} value={types} size="large">
          <Radio value={"Stock"}>Stock</Radio>
          <Radio value={"ETF"}>ETF</Radio>
          <Radio value={"Crypto"}>Crypto</Radio>
        </Radio.Group>
      </Space>
    </>
  );
}
