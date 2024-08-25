import { CoworkingPage } from "@/pages/coworking-page";
import { Coworking } from "@/pages/coworkings";
import { MainPage } from "@/pages/main";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layouts";

export default function RoutingProvider() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="coworking" element={<Coworking />} />
        <Route path="coworking/:id" element={<CoworkingPage />} />
      </Route>
    </Routes>
  );
}
