import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App as AntdApp, ConfigProvider } from "antd";
import "@ant-design/v5-patch-for-react-19";
import App from "./App.tsx";
import "antd/dist/reset.css";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <AntdApp className="app">
          <App />
        </AntdApp>
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
);
