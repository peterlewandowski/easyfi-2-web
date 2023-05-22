import { Card } from "antd";
import CreateStrategy from "../strategy/CreateStrategy";

export default function Main() {
  return (
    <Card id="main" style={{ backgroundColor: "#F0FBF0" }}>
      <CreateStrategy />
    </Card>
  );
}
