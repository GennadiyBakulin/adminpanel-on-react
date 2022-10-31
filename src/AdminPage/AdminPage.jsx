import React from "react";
import styles from "./AdminPage.module.css";
import {Header} from "../modules/Header/Header";
import {Search} from "../modules/Search/Search";
import {Table} from "../modules/Table/Table";

export const AdminPage = () => {
  return (
    <div className={styles._}>
      <Header />
      <Search />
      <Table />
    </div>
  );
};
