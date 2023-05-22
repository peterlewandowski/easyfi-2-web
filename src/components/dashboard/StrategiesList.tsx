import { useState, useEffect, useContext } from "react";

import { List, Card, Button, Modal } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

import { InputContext, StrategiesContext, UserContext } from "../../context";
import { EditStrategyCard } from "../strategy";
import { UserStrategy } from "../../context/StrategiesContext";

export default function StrategiesList() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { user } = useContext(UserContext);
  const { userInput, setUserInput } = useContext(InputContext);
  const {
    userStrategies,
    setUserStrategies,
    currentStrategy,
    setCurrentStrategy,
  } = useContext(StrategiesContext);

  useEffect(() => {
    if (
      userInput &&
      Object.keys(userInput).length > 0 &&
      userInput.amount.length
    ) {
      userInput.userId = user?.uid;
      fetch(`${import.meta.env.VITE_API_URL}/strategies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      })
        .then(() => {
          const uid = user?.uid;
          fetch(`${import.meta.env.VITE_API_URL}/strategies/${uid}`)
            .then((response) => response.json())
            .then((data: UserStrategy[]) => {
              data = data.sort((a, b) => b.created_at._seconds - a.created_at._seconds);
              setUserStrategies(data);
              setUserInput(null);
            });
        })
        .catch((err) => console.error(err));
    } else {
      if (user?.uid) {
        const uid = user.uid;
        fetch(`${import.meta.env.VITE_API_URL}/strategies/${uid}`)
          .then((response) => response.json())
          .then((data: UserStrategy[]) => {
            console.log({data});
            data = data.sort((a, b) => b.created_at._seconds - a.created_at._seconds);
            setUserStrategies(data);
            // console.log(userStrategies);
          })
          .catch(alert);
      }
    }
  }, [userInput, user]);

  const showModal = (userStrategy: UserStrategy) => {
    setCurrentStrategy(userStrategy);
    setIsModalVisible(true);
  };
  // console.log(currentStrategy)

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setCurrentStrategy(null);
    setIsModalVisible(false);
  };

  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={userStrategies}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card
              title={item.strategy.asset}
              style={{ width: "100%" }}
              extra={<Button type="dashed" icon={<PoweroffOutlined />} />}
            >
              <p>Amount: ${item.strategy.amount}</p>
              <p>Frequency: {item.strategy.frequency}</p>
              <p>Type: {item.strategy.type}</p>
              <p>Description: {item.strategy.description}</p>
              <p>
                Created:{" "}
                {new Date(item.created_at._seconds * 1000).toLocaleDateString()}
              </p>
              <Button onClick={() => showModal(item)}>Edit</Button>
            </Card>
          </List.Item>
        )}
      />
      <Modal
        title="Edit your strategy"
        open={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        {currentStrategy && (
          <EditStrategyCard />
        )}
      </Modal>
    </>
  );
}
