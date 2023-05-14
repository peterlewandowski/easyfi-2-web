import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import { UserContextProvider } from "./context/UserContext";
import { AnonRoute } from "./components/common/AnonRoute";
import { AuthRoute } from "./components/common/AuthRoute";

import "./App.css";
import Home from "./pages/Home";

import FooterContent from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { InputContextProvider, StrategiesContextProvider } from "./context";

const { Header, Content, Footer } = Layout;

const styles = {
  header: {
    width: "100%",
    padding: "0 12px",
  },

  content: {
    padding: "0 50px",
    marginTop: 64,
  },

  footer: {
    width: "100%",
    color: "#001529",
    padding: "0 12px",
  },
};

function App() {
  return (
    <UserContextProvider>
      <InputContextProvider>
        <StrategiesContextProvider>
          <Layout>
            <Header style={styles.header}>
              <Navbar />
            </Header>
            <Content style={styles.content}>
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
            <Footer style={styles.footer}>
              <FooterContent />
            </Footer>
          </Layout>
        </StrategiesContextProvider>
      </InputContextProvider>
    </UserContextProvider>
  );
}

export default App;
