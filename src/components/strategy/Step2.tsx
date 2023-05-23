import { Cascader, Space, Typography } from "antd";
import { InputContext, StrategiesContext } from "../../context";
import { useContext } from "react";
import { SingleValueType } from "rc-cascader/lib/Cascader";

type Asset = {
  value: string;
  label: string;
};

const stocks = [
  { value: "AAPL", label: "Apple Inc." },
  { value: "AMZN", label: "Amazon.com, Inc." },
  { value: "FB", label: "Meta Platforms, Inc." },
  { value: "GOOGL", label: "Alphabet Inc." },
  { value: "MSFT", label: "Microsoft Corp." },
  { value: "NFLX", label: "Netflix, Inc." },
  { value: "SPOT", label: "Spotify Technology S.A" },
  { value: "TSLA", label: "Tesla, Inc." },
];

const etfs = [
  { value: "SPY", label: "SPDR S&P 500 ETF Trust" },
  { value: "VTI", label: "Vanguard Total Stock Market ETF" },
  { value: "QQQ", label: "Invesco QQQ Trust" },
  { value: "IEFA", label: "iShares Core MSCI EAFE ETF" },
  { value: "AGG", label: "iShares Core U.S. Aggregate Bond ETF" },
  { value: "BND", label: "Vanguard Total Bond Market ETF" },
  { value: "GLD", label: "SPDR Gold Shares" },
  { value: "ARKK", label: "ARK Innovation ETF" },
];

const cryptos = [
  { value: "BTC", label: "Bitcoin" },
  { value: "ETH", label: "Ethereum" },
  { value: "XRP", label: "XRP (Ripple)" },
  { value: "LUNA", label: "Terra" },
  { value: "ADA", label: "Cardano" },
  { value: "SOL", label: "Solana" },
  { value: "DOT", label: "Polkadot" },
  { value: "DOGE", label: "Dogecoin" },
  { value: "ATOM", label: "Cosmos" },
  { value: "ALGO", label: "Algorand" },
];

export default function Step2() {
  const { userInput, setUserInput, types, assets, setAssets } =
    useContext(InputContext);
  const { currentStrategy } = useContext(StrategiesContext);

  const handleChange = (value: SingleValueType) => {
    setUserInput({
      ...userInput,
      asset: value,
      description: assets.find((asset: Asset) => asset.value === value[0])
        .label,
    });
  };

  if (types === "Stock") {
    setAssets(stocks);
  } else if (types === "ETF") {
    setAssets(etfs);
  } else if (types === "Crypto") {
    setAssets(cryptos);
  } else {
    setAssets("*Type not chosen*");
  }

  return (
    <Space direction="vertical">
      <Typography.Title level={5}>Which {types}:</Typography.Title>
      <Cascader
        placeholder={currentStrategy?.strategy.asset || "Take your pick"}
        defaultValue={currentStrategy?.strategy.asset || userInput.asset}
        options={assets}
        onChange={handleChange}
      />
    </Space>
  );
}
