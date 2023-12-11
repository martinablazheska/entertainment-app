import { Outlet } from "react-router-dom";

import Sidebar from "../components/UI/Sidebar";

import classes from "./RootLayoutPage.module.scss";

const RootLayoutPage: React.FC = () => {
  return (
    <div className={classes["root-layout"]}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayoutPage;
