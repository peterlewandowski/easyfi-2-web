import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";
import { Button, Col, Row, Space } from "antd";
import LogoImage from "/easyfi-logo.png";

export default function Navbar() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleClickLogin = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/"));
  };

  const navButtons = user ? (
    <>
      <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
      <Button onClick={handleLogout}>Sign Out</Button>
    </>
  ) : (
    <>
      <Button type="primary" onClick={handleClickLogin}>
        Sign in!
      </Button>
    </>
  );

  return (
    <Row justify="space-between">
      <Col>
        <Row>
          <img
            style={{ width: "30%", height: "auto" }}
            src={LogoImage}
            onClick={() => navigate("/")}
            alt="easyFi: Investment Planning. Made Easy."
          />
        </Row>
      </Col>
      <Space>{navButtons}</Space>
    </Row>
  );
}
