import { useContext, useEffect } from "react";
import { Radio, RadioChangeEvent } from "antd";
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
      <h3>I would like to invest in:</h3>
      <Radio.Group onChange={handleChange} value={types} size="large">
        <Radio value={"Stock"}>Stock</Radio>
        <Radio value={"ETF"}>ETF</Radio>
        <Radio value={"Crypto"}>Crypto</Radio>
      </Radio.Group>
    </>
  );
}
