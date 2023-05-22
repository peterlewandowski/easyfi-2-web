import "../../styles/create.css";

import { Button, Col, Divider, Row, Space, Steps } from "antd";
import { useContext, useState } from "react";

import { InputContext, StrategiesContext } from "../../context";

import { Step1, Step2, Step3, Step4, YourStrategyModal } from "./index";

const { Step } = Steps;

export default function CreateStrategy() {
  const { types } = useContext(InputContext);
  const [step, setStep] = useState(0);

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

  return (
    <>
      <Row justify="center">
        <Col flex="auto" span={18}>
          <Steps current={step}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
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
            <div className="steps-action">
              {step > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
              {step < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {step === steps.length - 1 && <YourStrategyModal />}
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
}
