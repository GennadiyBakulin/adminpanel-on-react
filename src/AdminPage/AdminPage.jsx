import React from "react";
import { Header, Search } from "../modules";
import styles from "./AdminPage.module.css";

export const AdminPage = () => {
  return (
    <div className={styles._}>
      <Header />
      <Search />
    </div>
  );
};
