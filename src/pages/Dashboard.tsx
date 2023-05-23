import { Button, Col, Row, Space } from "antd";
import { useNavigate } from "react-router-dom";

import StrategiesList from "../components/dashboard/StrategiesList";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create");
  };

  return (
    <>
      <Space direction="vertical">
        <Row justify="center">
          <Button type="primary" onClick={handleClick}>
            Add New Strategy
          </Button>
        </Row>
        <Row justify="center" style={{ backgroundColor: "#F0FBF0" }}>
          <Col xs={22} sm={22} md={20} lg={18}>
            <StrategiesList />
          </Col>
        </Row>
      </Space>
    </>
  );
}
