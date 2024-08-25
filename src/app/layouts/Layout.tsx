import { Footer, Header } from "@/widgets/layout";
import { Outlet } from "react-router-dom";
import "../index.css";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
