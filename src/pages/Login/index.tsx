import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import logo from "../../assets/logo.png";

export const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-4">
        <img src={logo} alt="Smartspace logo" className="mx-auto" />
      </div>
      <LoginForm />
    </div>
  );
};
