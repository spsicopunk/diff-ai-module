import React, { useState } from "react";
import "./PortletComponent.css";

const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

const PortletComponent = ({ portletNamespace, contextPath, portletElementId }) => {
  // Estado del contador
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Contenedor del contador */}
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">Hola, Tailwind en Liferay!</h1>
        <p className="text-gray-600">Este es un módulo JS con Tailwind.</p>

        {/* Contador con botones */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <span className="text-2xl font-bold">{count}</span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Información del portlet */}
      <h1 className="text-center mt-6 text-xl font-semibold">Hello world, eso perros</h1>
      <div className="mt-4 text-center">
        <p><strong>Portlet Namespace:</strong> {portletNamespace}</p>
        <p><strong>Context Path:</strong> {contextPath}</p>
        <p><strong>Portlet Element Id:</strong> {portletElementId}</p>
      </div>
    </div>
  );
};

export default PortletComponent;
