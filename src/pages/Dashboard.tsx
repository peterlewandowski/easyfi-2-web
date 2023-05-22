import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import StrategiesList from "../components/dashboard/StrategiesList";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create");
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button type="primary" onClick={handleClick}>
          Add New
        </Button>
      </nav>
      <div id="main" style={{ backgroundColor: "#F0FBF0" }}>
        <StrategiesList />
      </div>
    </>
  );
}
