import { Outlet } from "react-router-dom";

import Sidebar from "../components/UI/Sidebar";

const RootLayoutPage: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default RootLayoutPage;
