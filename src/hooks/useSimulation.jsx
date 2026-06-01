
import { useEffect, useState } from "react";
import { useSimulationContext } from "../context/SimulationContext";

export default function useSimulation() {

  const { config, setStats } = useSimulationContext();

  const [queue, setQueue] = useState([]);
  const [attending, setAttending] = useState(null);
  const [completed, setCompleted] = useState([]);

  // Llegada automática de personas
  useEffect(() => {

    if (!config.lambda) return;

    const arrivalTime = 1000 / config.lambda;

    const interval = setInterval(() => {

      const newPerson = {
        id: Date.now(),
        estado: "esperando",
        arrivalTime: Date.now()
      };

      setQueue(prev => [...prev, newPerson]);

    }, arrivalTime);

    return () => clearInterval(interval);

  }, [config.lambda]);



  // Atención automática
  useEffect(() => {

    if (attending || queue.length === 0) return;

    const next = queue[0];

    setAttending({
      ...next,
      estado: "atendiendo"
    });

    setQueue(prev => prev.slice(1));

    const serviceTime = 1000 / config.mu;

    const timeout = setTimeout(() => {

      const completedPerson = {
        ...next,
        estado: "completado",
        completedTime: Date.now()
      };

      setCompleted(prev => [...prev, completedPerson]);

      setAttending(null);

    }, serviceTime);

    return () => clearTimeout(timeout);

  }, [queue, attending, config.mu]);



  // Estadísticas automáticas
  useEffect(() => {

    const totalWait =
      completed.reduce((acc, person) => {

        const wait =
          (person.completedTime - person.arrivalTime) / 1000;

        return acc + wait;

      }, 0);

    const averageWait =
      completed.length > 0
        ? totalWait / completed.length
        : 0;

    setStats({
      attended: completed.length,
      averageWait: averageWait.toFixed(2),
      queueAverage: queue.length,
      utilization: (
        config.lambda / config.mu
      ).toFixed(2)
    });

  }, [completed, queue, config, setStats]);



  // Agregar persona manualmente
  const addPerson = () => {

    const newPerson = {
      id: Date.now(),
      estado: "esperando",
      arrivalTime: Date.now()
    };

    setQueue(prev => [...prev, newPerson]);
  };



  // Reiniciar simulación
  const resetSimulation = () => {

    setQueue([]);
    setAttending(null);
    setCompleted([]);

    setStats({
      attended: 0,
      averageWait: 0,
      queueAverage: 0,
      utilization: 0
    });
  };



  return {
    queue,
    attending,
    completed,
    addPerson,
    resetSimulation
  };
}

