import { Card, Col, Space } from "antd";
import { CreateStrategy } from ".";
import { useContext } from "react";
import { StrategiesContext } from "../../context";

export default function EditStrategyCard() {
  const { currentStrategy } = useContext(StrategiesContext);

  if (!currentStrategy) {
    return null;
  }

  const {
    strategy: { asset, amount, frequency, type, description },
    created_at: { _seconds },
  } = currentStrategy;

  return (
    <>
      <Space direction="vertical" size={12} style={{ width: "100%" }}>
        <Card title={asset} style={{ width: "100%" }}>
          <p>Amount: ${amount}</p>
          <p>Frequency: {frequency}</p>
          <p>Type: {type}</p>
          <p>Description: {description}</p>
          <p>Created: {new Date(_seconds * 1000).toLocaleDateString()}</p>
        </Card>
        {/* <Col>
          <CreateStrategy direction="vertical"/>
        </Col> */}
      </Space>
    </>
  );
}
