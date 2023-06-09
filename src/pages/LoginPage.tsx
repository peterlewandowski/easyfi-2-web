import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import { Modal, Button, message } from "antd";

export const LoginPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const login = () => {
    signInWithPopup(auth, provider) // function takes in auth and provider from firebase
      .then((result) => {
        // returns the result and
        setUser(result.user); // setUser is updated with result value (the uuid) to the user property
        navigate("/dashboard"); // then navigates to dashboard
      })
      .catch((error) => alert(error.message)); // if error is returned then display alert with the error in the message
  };

  const warning = () => {
    message.warning("Please log in, or cancel to return to home page.", 1.5);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    navigate("/");
  };

  return (
    <>
      <Modal
        title="To continue, please log in below:"
        open={isModalVisible}
        onOk={warning}
        onCancel={handleCancel}
      >
        <Button type="primary" onClick={() => login()}>
          Sign In with Google
        </Button>
      </Modal>
    </>
  );
};
