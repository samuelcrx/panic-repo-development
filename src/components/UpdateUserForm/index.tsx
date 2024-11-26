import { useState } from "react";
import globe from "../../assets/lucide_globe.svg";
import location from "../../assets/lucide_map_pin.svg";
import phoneCall from "../../assets/lucide_phone_call.svg";

export const UpdateUserForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dados");

  return (
    <div className="rounded-lg" style={{ width: "fit-content" }}>
      <h1 className="text-xl font-bold">Ana Beatriz Oliveira Santos</h1>
      <p className="text-gray-600">Cadastro realizado em 05/11/2024</p>
      <div className="mt-4">
        <div className="flex space-x-4">
          <div
            className={`text-[18px] cursor-pointer pb-[6px] ${
              activeTab === "dados"
                ? "font-bold text-selectedTab border-b-2 border-systemOrange"
                : "text-disabledTab"
            }`}
            onClick={() => setActiveTab("dados")}
          >
            Dados do usuário
          </div>
          <div
            className={`text-[18px] cursor-pointer text-disabledTab pb-[6px] ${
              activeTab === "acesso"
                ? "font-bold text-selectedTab border-b-2 border-systemOrange"
                : "text-disabledTab"
            }`}
            onClick={() => setActiveTab("acesso")}
          >
            Acesso
          </div>
        </div>
        {activeTab === "dados" && (
          <div className="mt-4">
            <div>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 px-[12px] py-[8px] bg-white rounded-[12px]">
                  <img src={globe} />
                  <span className="text-sm">
                    Última sessão: 12/11/2024 às 09:53
                  </span>
                </div>
                <div className="flex items-center space-x-2 px-[12px] py-[8px] bg-white rounded-[12px]">
                  <img src={location} alt="Location" />
                  <span className="text-sm flex items-center">
                    Localização:{" "}
                    <span
                      className={`h-2 w-2 rounded-full bg-statusActive mr-2 ml-2`}
                    />{" "}
                    Ativa
                  </span>
                </div>
                <div className="flex items-center space-x-2 px-[12px] py-[8px] bg-white rounded-[12px]">
                  <img src={phoneCall} alt="Phone Call" />
                  <span className="text-sm flex items-center">
                    Chamadas telefônicas:{" "}
                    <span
                      className={`h-2 w-2 rounded-full bg-statusActive mr-2 ml-2`}
                    />{" "}
                    Ativa
                  </span>
                </div>
              </div>
              <div className="p-6 bg-white mt-[32px] rounded-[12px]">
                <div className="mt-6">
                  <h2 className="text-lg font-semibold">
                    Informações pessoais
                  </h2>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        value="Ana Beatriz Oliveira Santos"
                        className="w-full mt-1 p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">CPF</label>
                      <input
                        type="text"
                        value="123.987.123-88"
                        className="w-full mt-1 p-2 border rounded"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-lg font-semibold">Contato</h2>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="block text-gray-700">E-mail</p>
                      <input
                        type="email"
                        value="beacoliverosantos@gmail.com"
                        className="w-full mt-1 p-2 border rounded"
                      />
                    </div>
                    <div>
                      <p className="block text-gray-700">Telefone</p>
                      <input
                        type="text"
                        value="(12) 98560-0775"
                        className="w-full mt-1 p-2 border rounded"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-lg font-semibold">Observações</h2>
                  <textarea
                    className="w-full mt-1 p-2 border rounded"
                    rows={4}
                    placeholder="Adicione observações para este usuário"
                  ></textarea>
                  <div className="text-right text-gray-600 mt-1">240/1024</div>
                </div>
                <div className="mt-6">
                  <h2 className="text-lg font-semibold">Anexos</h2>
                  <p className="text-gray-600">
                    Faça upload de até 5 arquivos (limite de 64mb cada)
                  </p>
                  <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
                    Adicionar Anexo
                  </button>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span>Anexo-12.12.24 (1).pdf</span>
                      <button className="text-red-600">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span>Novo-documento-142843.pdf</span>
                      <button className="text-red-600">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span>Anexo-12.12.24 (3).pdf</span>
                      <button className="text-red-600">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span>Segundo Anexo-12.12.24.pdf</span>
                      <button className="text-red-600">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span>Anexo-12.12.24 (2).pdf</span>
                      <button className="text-red-600">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-6">
                  <button className="px-4 py-2 bg-black text-white rounded">
                    Atualizar Usuário
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded">
                    Inativar Usuário
                  </button>
                </div>
                <p className="mt-2 text-gray-600">
                  Ao inativar o usuário, o usuário ficará impedido de acessar o
                  aplicativo.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "acesso" && (
          <div className="mt-4">
            <p className="text-gray-600">Conteúdo da aba Acesso.</p>
          </div>
        )}
      </div>
    </div>
  );
};
