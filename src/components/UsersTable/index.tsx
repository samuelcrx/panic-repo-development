import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { UpdateUserForm } from "../UpdateUserForm";

const users = [
  {
    name: "Ana Beatriz Oliveira Santos",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Carla Maria Fonseca Silva",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Larissa Cristina Mendes Souza",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Paula Fernanda Azevedo Lima",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Desativada",
    call: "Desativado",
    access: "Desativado",
  },
  {
    name: "Júlia Camila Ribeiro Teixeira",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Mariana Lopes Ferreira Costa",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Gabriela Aparecida Moreira Pinto",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Daniela Alves Santana",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Renata Roberta de Souza Andrade",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Letícia Moura da Costa",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Amanda Ferreira de Oliveira",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Bruna Caroline Ramos Borges",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Patrícia Regina Monteiro da Rocha",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Vanessa Pereira dos Santos",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
  {
    name: "Tatiana dos Reis Almeida",
    cpf: "000.000.000-00",
    lastSession: "12/11/2024 às 09:53",
    location: "Ativa",
    call: "Ativa",
    access: "Ativa",
  },
];

export const UsersTable: FC = () => {
  const [userAction, setUserAction] = useState("");

  // const handleNewUser = () => {
  //   setUserAction("new");
  // };

  const handleUpdateUser = () => {
    setUserAction("update");
  };

  if (userAction === "update") {
    return <UpdateUserForm />;
  }

  if (userAction === "new") {
    return <UpdateUserForm />;
  }

  return (
    <main className="flex-1">
      <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full">
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Pesquisar usuário"
            className="border border-gray-300 rounded-lg w-1/3"
            style={{ padding: "4px 10px" }}
          />
          <button
            className="bg-[#142129] text-white px-8 py-1 rounded-lg"
            onClick={handleUpdateUser}
          >
            + Novo Usuário
          </button>
        </div>
        <div
          className="overflow-y-auto flex-grow"
          style={{ maxHeight: "calc(100vh - 308px)" }}
        >
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4 cursor-pointer">Nome</th>
                <th className="p-4 cursor-pointer">CPF</th>
                <th className="p-4 cursor-pointer">Última sessão</th>
                <th className="p-4 cursor-pointer">Localização</th>
                <th className="p-4 cursor-pointer">Chamada telefônica</th>
                <th className="p-4 cursor-pointer">Acesso</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.cpf}</td>
                  <td className="p-4">{user.lastSession}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          user.location === "Ativa"
                            ? "bg-statusActive"
                            : "bg-statusInactive"
                        } mr-2`}
                      ></span>
                      {user.location}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          user.call === "Ativa"
                            ? "bg-statusActive"
                            : "bg-statusInactive"
                        } mr-2`}
                      ></span>
                      {user.call}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <span
                        className={`h-2 w-2 rounded-full mr-2 ${
                          user.access === "Ativa"
                            ? "bg-statusActive"
                            : "bg-statusInactive"
                        }`}
                      ></span>
                      {user.access}
                    </div>
                  </td>
                  <td className="p-4">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>Exibindo 15 de 15 resultados</span>
          <div className="flex items-center">
            <span className="mr-2">Resultados por página</span>
            <select className="border border-gray-200 p-2 bg-transparent">
              <option>15</option>
              <option>30</option>
              <option>50</option>
            </select>
            <span className="ml-4">Página 1 de 15</span>
            <div className="flex ml-4">
              <button className="border border-gray-200 rounded-lg px-2 py-1 bg-transparent">
                <FontAwesomeIcon
                  icon={faAnglesLeft}
                  className="text-gray-500"
                />
              </button>
              <button className="border border-gray-200 rounded-lg px-2 py-1 ml-2 bg-transparent">
                <FontAwesomeIcon icon={faAngleLeft} className="text-gray-500" />
              </button>
              <button className="border border-gray-200 rounded-lg px-2 py-1 ml-2 bg-transparent">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-500"
                />
              </button>
              <button className="border border-gray-200 rounded-lg px-2 py-1 ml-2 bg-transparent">
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  className="text-gray-500"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
