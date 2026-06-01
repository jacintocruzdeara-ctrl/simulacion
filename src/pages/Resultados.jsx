import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

import { useSimulationContext } from "../context/SimulationContext";

export function resultados() {

  const { stats, config } = useSimulationContext();

  // Datos dinámicos para gráfica de líneas
  const lineData = [
    {
      cajeros: config.cashiers,
      espera: Number(stats.averageWait),
    },
  ];

  // Datos dinámicos para gráfica de barras
  const barData = [
    {
      rango: "En cola",
      frecuencia: stats.queueAverage,
    },
    {
      rango: "Atendidos",
      frecuencia: stats.attended,
    },
  ];

  return (

    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">

      {/* HEADER */}
      <div className="bg-blue-900 text-white text-center py-4 font-bold text-xl">
        RESULTADOS PRINCIPALES
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x">

        {/* Espera promedio */}
        <div className="p-6 text-center">

          <h3 className="text-gray-600 text-sm font-semibold">
            Tiempo promedio de espera
          </h3>

          <p className="text-5xl font-bold text-green-600 mt-4">
            {stats.averageWait || 0}
          </p>

          <span className="text-gray-500 text-lg">
            seg
          </span>

        </div>

        {/* Atendidos */}
        <div className="p-6 text-center">

          <h3 className="text-gray-600 text-sm font-semibold">
            Clientes atendidos
          </h3>

          <p className="text-5xl font-bold text-green-600 mt-4">
            {stats.attended || 0}
          </p>

          <span className="text-gray-500 text-lg">
            clientes
          </span>

        </div>

        {/* Cola */}
        <div className="p-6 text-center">

          <h3 className="text-gray-600 text-sm font-semibold">
            Personas en cola
          </h3>

          <p className="text-5xl font-bold text-green-600 mt-4">
            {stats.queueAverage || 0}
          </p>

          <span className="text-gray-500 text-lg">
            personas
          </span>

        </div>

        {/* Utilización */}
        <div className="p-6 text-center">

          <h3 className="text-gray-600 text-sm font-semibold">
            Utilización
          </h3>

          <p className="text-5xl font-bold text-green-600 mt-4">
            {stats.utilization || 0}
          </p>

          <span className="text-gray-500 text-lg">
            %
          </span>

        </div>

      </div>

      {/* HEADER GRAFICAS */}
      <div className="bg-blue-900 text-white text-center py-3 font-bold text-lg">
        GRÁFICAS
      </div>

      {/* GRAFICAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">

        {/* LINE CHART */}
        <div>

          <h3 className="text-center font-semibold mb-4 text-gray-700">
            Espera vs Cajeros
          </h3>

          <div className="h-72">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={lineData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="cajeros" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="espera"
                  stroke="#2563eb"
                  strokeWidth={3}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* BAR CHART */}
        <div>

          <h3 className="text-center font-semibold mb-4 text-gray-700">
            Estado actual de simulación
          </h3>

          <div className="h-72">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={barData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="rango" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="frecuencia"
                  fill="#3b82f6"
                  radius={[5, 5, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}

export default resultados;

