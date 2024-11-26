import { FC } from "react";
import home from "../../assets/home.svg";
import homeSelected from "../../assets/home-selected.svg";
import app from "../../assets/app.svg";
import orangeApp from "../../assets/orangeApp.svg";
import team from "../../assets/team.svg";
import orangeTeam from "../../assets/orangeTeam.svg";
import settings from "../../assets/settings.svg";
import orangeSettings from "../../assets/orangeSettings.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

interface SideBarProps {
  selectedTab: string;
  handleTab: (tab: string) => void;
}

export const SideBar: FC<SideBarProps> = ({ selectedTab, handleTab }) => {
  return (
    <div className="flex flex-1 max-w-118">
      <aside
        className="w-29 bg-white flex flex-col items-center shadow-md calc-aside-height"
        style={{ maxWidth: 118, padding: "30px 14px 0 14px" }}
      >
        <div
          className="mb-6 cursor-pointer"
          style={
            selectedTab === "home"
              ? { borderLeft: "2px solid #D73C23", width: "100%" }
              : { width: "100%" }
          }
          onClick={() => handleTab("home")}
        >
          <p
            className={`flex flex-col items-center font-sora text-xs ${
              selectedTab === "home" ? "text-systemOrange" : ""
            }`}
          >
            <img
              src={selectedTab === "home" ? homeSelected : home}
              alt="Home"
              className="pb-1"
            />{" "}
            Início
          </p>
        </div>
        <div
          className="mb-6 cursor-pointer"
          style={
            selectedTab === "users"
              ? { borderLeft: "2px solid #D73C23", width: "100%" }
              : { width: "100%" }
          }
          onClick={() => handleTab("users")}
        >
          <p
            className={`flex flex-col items-center ${
              selectedTab === "users" ? "text-systemOrange" : ""
            } font-sora text-xs`}
          >
            <span className="pb-1">
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  fontSize: 22,
                  color: selectedTab === "users" ? "#D73C23" : "#334155",
                }}
              />
            </span>
            Usuários
          </p>
        </div>
        <div
          className="mb-6 cursor-pointer"
          style={
            selectedTab === "app"
              ? { borderLeft: "2px solid #D73C23", width: "100%" }
              : { width: "100%" }
          }
          onClick={() => handleTab("app")}
        >
          <p
            className={`flex flex-col items-center text-gray-500 font-sora text-xs ${
              selectedTab === "app" ? "text-systemOrange" : ""
            }`}
          >
            <img
              src={selectedTab === "app" ? orangeApp : app}
              alt="Home"
              className="pb-1"
            />{" "}
            Aplicativo
          </p>
        </div>
        <div
          className="mb-6 cursor-pointer"
          style={
            selectedTab === "team"
              ? { borderLeft: "2px solid #D73C23", width: "100%" }
              : { width: "100%" }
          }
          onClick={() => handleTab("team")}
        >
          <p
            className={`flex flex-col items-center font-sora text-xs ${
              selectedTab === "team" ? "text-systemOrange" : ""
            }`}
          >
            <img
              src={selectedTab === "team" ? orangeTeam : team}
              alt="Team"
              className="pb-1"
            />{" "}
            Equipe
          </p>
        </div>
        <div
          className="mt-auto pb-2 cursor-pointer"
          style={
            selectedTab === "settings"
              ? { borderLeft: "2px solid #D73C23", width: "100%" }
              : { width: "100%" }
          }
          onClick={() => handleTab("settings")}
        >
          <p
            className={`flex flex-col items-center text-gray-500 font-sora text-xs pl-4 ${
              selectedTab === "settings" ? "text-systemOrange" : ""
            }`}
          >
            <img
              src={selectedTab === "settings" ? orangeSettings : settings}
              alt="Home"
              className="pb-1"
            />{" "}
            Configurações
          </p>
        </div>
      </aside>
    </div>
  );
};
