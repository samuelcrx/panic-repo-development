import React, { useState } from "react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { UsersTable } from "../../components/UsersTable";

export const Home: React.FC = () => {
  const [tab, setTab] = useState("users");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className="flex flex-col">
      <Header />
      {/* <div className="flex h-full">
        <div className="flex-1">
          <SideBar selectedTab={tab} handleTab={handleTab} />
        </div>
        <div className="flex-1">
            <div className="w-screen pr-[26px] pt-[16px] pl-[26px] h-full">
              {tab === "users" && <UsersTable />}
            </div>
        </div>
      </div> */}
    </div>
  );
};
