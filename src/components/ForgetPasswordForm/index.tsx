import { FC } from "react";
import { Input } from "../Input";

interface ForgetPasswordFormProps {
  handleSubmit: (event: React.FormEvent) => void;
  handleCancel: () => void;
}

export const ForgetPasswordForm: FC<ForgetPasswordFormProps> = ({
  handleSubmit,
  handleCancel,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-2">Esqueci minha senha</h2>
      <p className="text-gray-500 mb-6">
        Insira seu e-mail para redefinir sua senha
      </p>
      <Input label="E-mail" type="email" id="email" placeholder="E-mail" />
      <button
        className="w-full bg-black text-white py-2 rounded-lg mb-4"
        onClick={handleSubmit}
      >
        Enviar
      </button>
      <button
        type="button"
        className="w-full bg-white text-black py-2 rounded-lg border border-black"
        onClick={handleCancel}
      >
        Cancelar
      </button>
    </div>
  );
};
