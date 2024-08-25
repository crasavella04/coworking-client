import { YMaps } from "@pbe/react-yandex-maps";
import { ConfigProvider } from "antd";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { antdConfig } from "../../shared/configs";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <YMaps query={{ lang: "en_RU" }}>
          <ConfigProvider theme={{ token: antdConfig }}>
            {children}
          </ConfigProvider>
        </YMaps>
      </BrowserRouter>
    </React.StrictMode>
  );
}
