import { createContext, useContext, useState } from "react";

const SimulationContext = createContext();

export function SimulationProvider({ children }) {

  const [config, setConfig] = useState({
    lambda: 2,
    mu: 3,
    cashiers: 1,
    time: 8,
    replicas: 1
  });

  const [stats, setStats] = useState({
    attended: 0,
    averageWait: 0,
    queueAverage: 0
  });

  return (
    <SimulationContext.Provider
      value={{
        config,
        setConfig,
        stats,
        setStats
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
}

export const useSimulationContext = () =>
  useContext(SimulationContext);