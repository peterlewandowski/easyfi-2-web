import "../../styles/create.css";

import { Button, Col, Row, Space, Steps, StepsProps } from "antd";
import { useContext, useState } from "react";

import { InputContext } from "../../context";

import { Step1, Step2, Step3, Step4, YourStrategyModal } from "./index";

export default function CreateStrategy({direction}: StepsProps) {
  const { types } = useContext(InputContext);
  const [step, setStep] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const steps = [
    {
      title: "Choose type",
      content: <Step1 />,
    },
    {
      title: "Choose investment",
      content: <Step2 />,
    },
    {
      title: "Choose frequency",
      content: <Step3 />,
    },
    {
      title: "How much per (day, week, month)?",
      content: <Step4 />,
    },
  ];

  const next = () => {
    if (types.length !== 0) {
      setStep(step + 1);
    } else {
      alert("Choose an investment type to continue");
    }
  };

  const prev = () => {
    setStep(step - 1);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Row justify="center">
        <Col flex="auto" span={18}>
          <Steps current={step} items={steps} direction={direction}/>
          <Row justify="center">
            <Col flex="auto">
              <section className="steps-content">
                <Row justify="center" align="middle">
                  {steps[step].content}
                </Row>
              </section>
            </Col>
          </Row>

          <Row justify="center">
            <Space.Compact block>
              {step > 0 && (
                <Button block type="dashed" onClick={() => prev()}>
                  Previous
                </Button>
              )}
              {step < steps.length - 1 && (
                <Button block type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {step === steps.length - 1 && (
                <Button block type="primary" onClick={showModal}>
                  Create Strategy
                </Button>
              )}
            </Space.Compact>
          </Row>
        </Col>
      </Row>
      <YourStrategyModal
        visible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
}
