import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { UsersTable } from "../../components/UsersTable/UsersTable";
import Container from "../../components/Container/Container";
import SideBar from "../../components/SideBar/SideBar";

export const Home: React.FC = () => {
  const [tab, setTab] = useState("users");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <>
      <Header />
      <SideBar selectedTab={tab} handleTab={handleTab} />
      <Container>{tab === "users" && <UsersTable />}</Container>
    </>
  );
};
