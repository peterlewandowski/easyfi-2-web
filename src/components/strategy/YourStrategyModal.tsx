import { useContext } from "react";
import { Modal, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { InputContext, StrategiesContext } from "../../context";

type YourStrategyModalProps = {
  visible: boolean;
  setIsModalVisible: (visible: boolean) => void;
};

export default function YourStrategyModal({
  visible,
  setIsModalVisible,
}: YourStrategyModalProps) {
  const { userInput } = useContext(InputContext);
  const { currentStrategy } = useContext(StrategiesContext);
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate("/login");
  };

  return (
    <>
      <Modal
        title="Your strategy:"
        open={visible}
        onOk={handleOk}
        okText="Save Strategy"
        onCancel={handleCancel}
        cancelText="Edit"
      >
        <Card
          title={currentStrategy?.strategy.asset || userInput?.asset}
          style={{ width: "100%" }}
        >
          <p>Amount: ${currentStrategy?.strategy.amount || userInput?.amount}</p>
          <p>
            Frequency:{" "}
            {currentStrategy?.strategy.frequency || userInput?.frequency}
          </p>
          <p>Type: {currentStrategy?.strategy.frequency || userInput?.type}</p>
          <p>
            Description:{" "}
            {currentStrategy?.strategy.frequency || userInput?.description}
          </p>
        </Card>
      </Modal>
    </>
  );
}
