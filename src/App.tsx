import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import { UserContextProvider } from "./context/UserContext";
import { AnonRoute } from "./components/common/AnonRoute";
import { AuthRoute } from "./components/common/AuthRoute";

import "./App.css";
import Home from "./pages/Home";

const { Header, Content, Footer } = Layout;

function App() {
  return (
      <Layout>
        <Header>Header</Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="create-strategy" element={<CreateStrategy />} /> */}
            <Route
              path="/login"
              element={<AnonRoute>{/* <LoginPage /> */}</AnonRoute>}
            />
            <Route
              path="/dashboard"
              element={<AuthRoute>{/* <Dashboard /> */}</AuthRoute>}
            />
          </Routes>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
  );
}

export default App;
