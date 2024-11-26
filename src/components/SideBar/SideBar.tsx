import home from "../../assets/home.svg";
import homeSelected from "../../assets/home-selected.svg";
import users from "../../assets/users.svg";
import usersSelected from "../../assets/users-selected.svg";
import settings from "../../assets/settings.svg";
import settingsSelected from "../../assets/settings-selected.svg";

interface SideBarProps {
  selectedTab: string;
  handleTab: (tab: string) => void;
}

function AsideButton({
  isSelected,
  label,
  tabName,
  handleTab,
  icon,
  selectedIcon,
}: {
  isSelected?: boolean;
  label: string;
  tabName: string;
  handleTab: (tab: string) => void;
  icon: string;
  selectedIcon: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Sora, sans-serif",
        fontSize: "0.75rem",
        lineHeight: "1rem",
        color: isSelected ? "#dc4128" : "revert",
        borderLeft: `2px solid ${isSelected ? "#dc4128" : "transparent"}`,
        cursor: "pointer",
      }}
      onClick={() => handleTab(tabName)}
    >
      <img src={isSelected ? selectedIcon : icon} alt="" />
      {label}
    </div>
  );
}

export default function SideBar({ selectedTab, handleTab }: SideBarProps) {
  return (
    <div
      style={{
        position: "fixed",
        background: "white",
        width: 128,
        padding: "16px 8px",
        minHeight: "calc(100% - 64px)",
        marginTop: "64px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 6px #00000019",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <AsideButton
          label="Início"
          handleTab={handleTab}
          tabName="home"
          isSelected={selectedTab === "home"}
          icon={home}
          selectedIcon={homeSelected}
        />

        <AsideButton
          label="Usuários"
          handleTab={handleTab}
          tabName="users"
          isSelected={selectedTab === "users"}
          icon={users}
          selectedIcon={usersSelected}
        />
      </div>

      <AsideButton
        label="Configurações"
        handleTab={handleTab}
        tabName="settings"
        isSelected={selectedTab === "settings"}
        icon={settings}
        selectedIcon={settingsSelected}
      />
    </div>
  );
}
