import { createBrowserRouter, Routes, Route  } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";

import { UserContextProvider } from "./context/UserContext";

const { Header, Content, Footer } = Layout;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-strategy",
    element: <CreateStrategy />,
  },
  {path:'/login', element: {<AnonRoute>}}
]);

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Routes>

            <Route path="/" element={<Home />} />

        </Routes>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
