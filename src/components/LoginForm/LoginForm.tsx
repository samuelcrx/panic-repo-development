import { useState } from "react";
import { ForgetPasswordForm } from "../ForgetPasswordForm/ForgetPasswordForm";
import { Input } from "../Input/Input";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const [page, setPage] = useState("login");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/users");
  };

  const handleForgotPasswordClick = () => {
    setPage("forgotPassword");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setPage("login");
    toast.success(
      "Se o e-mail existir, uma nova senha será enviada para ele.",
      {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
  };

  const handleCancel = () => {
    setPage("login");
  };

  return (
    <>
      {page === "login" ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Entre na sua conta</h2>
          <p className="text-gray-500 mb-6">
            Insira seu usuário e senha para acessar o sistema
          </p>
          <form>
            <Input
              label="Usuário"
              type="text"
              id="username"
              placeholder="Usuário"
            />
            <Input
              label="Senha"
              type="password"
              id="password"
              placeholder="Senha"
            />
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700">Lembrar senha</span>
              </label>
              <p className="text-gray-500" onClick={handleForgotPasswordClick}>
                Esqueci minha senha
              </p>
            </div>
            <button
              className="w-full bg-black text-white py-2 rounded-lg"
              onClick={handleLogin}
            >
              Entrar
            </button>
          </form>
        </div>
      ) : (
        <ForgetPasswordForm
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};
