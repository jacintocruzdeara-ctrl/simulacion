import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSimulationContext } from "../context/SimulationContext";
export  function Pagess() {


const navigate = useNavigate();

const { setConfig } = useSimulationContext();

const [form, setForm] = useState({
  lambda: "",
  mu: "",
  cashiers: 1,
  time: "",
  replicas: ""
});


const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};
  
const startSimulation = () => {

  setConfig({
    lambda: Number(form.lambda),
    mu: Number(form.mu),
    cashiers: Number(form.cashiers),
    time: Number(form.time),
    replicas: Number(form.replicas)
  });

  navigate("/oki");
};
  return (
 <div className="flex justify-center items-start p-6 bg-gray-100 min-h-screen">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">
          Parámetros de simulación
        </h2>

        {/* Input tasa de llegadas */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Tasa de llegadas (λ)
          </label>
          <input
  type="number"
  name="lambda"
  value={form.lambda}
  onChange={handleChange}
  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  placeholder="20 clientes/h"
/>
        </div>

        {/* Input tasa de servicio */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Tasa de servicio (μ)
          </label>
          <input
  type="number"
  name="mu"
  value={form.mu}
  onChange={handleChange}
  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  placeholder="15 clientes/h"
/>
        </div>

        {/* Cajeros */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Número de cajeros
          </label>
         <select
  name="cashiers"
  value={form.cashiers}
  onChange={handleChange}
  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
        </div>

        {/* Tiempo simulación */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Tiempo de simulación (horas)
          </label>
          <input
  type="number"
  name="time"
  value={form.time}
  onChange={handleChange}
  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  placeholder="8"
/>
        </div>

        {/* Réplicas */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Número de réplicas
          </label>
          <input
  type="number"
  name="replicas"
  value={form.replicas}
  onChange={handleChange}
  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  placeholder="30"
/>
        </div>

        {/* Botón */}
        <button onClick={()=>navigate("/oki")}
         className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition">
          Iniciar Simulación
        </button>
      </div>
    </div>
  );  
}
