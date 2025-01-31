import React, { useState } from "react";

const App = () => {
  const [messages, setMessages] = useState([]); // Almacena los mensajes
  const [inputValue, setInputValue] = useState(""); // Almacena el valor del input

  // Función para manejar el envío de mensajes
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return; // Evita mensajes vacíos

    // Agrega el mensaje del usuario
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, sender: "user" },
    ]);

    // Simula una respuesta de ambos modelos
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Respuesta de DeepSeek: ...", sender: "ai", model: "deepseek" },
        { text: "Respuesta de ChatGPT: ...", sender: "ai", model: "chatgpt" },
      ]);
    }, 1000);

    setInputValue(""); // Limpia el input
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-6">
      {/* Encabezado del chat */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Chat con IA</h1>
        <p className="text-gray-600">Responde DeepSeek y ChatGPT</p>
      </div>

      {/* Área de Mensajes en dos columnas */}
      <div className="flex-1 flex gap-8 overflow-y-auto">
        {/* Columna de DeepSeek */}
        <div className="w-1/2 bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-bold text-blue-600 mb-4">DeepSeek</h2>
          <div className="space-y-4"> {/* Espaciado entre mensajes */}
            {messages
              .filter((message) => message.model === "deepseek" || message.sender === "user")
              .map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-blue-100 text-gray-900"
                    }`}
                  >
                    <div className="text-sm font-semibold mb-1">
                      {message.sender === "user" ? "Tú" : "DeepSeek"}
                    </div>
                    <div>{message.text}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Columna de ChatGPT */}
        <div className="w-1/2 bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-bold text-green-600 mb-4">ChatGPT</h2>
          <div className="space-y-4"> {/* Espaciado entre mensajes */}
            {messages
              .filter((message) => message.model === "chatgpt" || message.sender === "user")
              .map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-green-100 text-gray-900"
                    }`}
                  >
                    <div className="text-sm font-semibold mb-1">
                      {message.sender === "user" ? "Tú" : "ChatGPT"}
                    </div>
                    <div>{message.text}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Entrada de Texto y Botón de Envío */}
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default App;