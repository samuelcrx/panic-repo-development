import { FC } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import logOut from "../../assets/log-out.svg";
import userOrangeIcon from "../../assets/user-orange-icon.svg";

export const Header: FC = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/login");
  };

  return (
    <header
      className="flex justify-between items-center bg-white p-4 shadow-md border-b border-borderGray"
      style={{ maxHeight: "64px", padding: "14px 46px" }}
    >
      <div className="flex items-center">
        <img
          src={logo}
          alt="Smartspace Logo"
          className="mr-2"
          style={{ maxWidth: "188px" }}
        />
      </div>
      <div className="flex items-center">
        <span
          className="mr-4 text-gray300 font-bold"
          style={{ fontSize: "14px" }}
        >
          João Silva
        </span>
        <div className="rounded-full pr-4">
          <img src={userOrangeIcon} alt="User" className="cursor-pointer" />
        </div>
        <img
          src={logOut}
          alt="logOut"
          className="cursor-pointer"
          onClick={handleLogOut}
        />
      </div>
    </header>
  );
};
