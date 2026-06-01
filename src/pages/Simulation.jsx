import Queue from "../components/Queue";
import Stats from "../components/Stats";
import Controls from "../components/Controls";
import AttendingBox from "../components/AttendingBox";
import CompletedList from "../components/CompletedList";
import useSimulation from "../hooks/useSimulation";

export function Si() {

  const simulation = useSimulation();

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        Simulación de Cola
      </h1>

      <Stats {...simulation} />

      <Controls {...simulation} />

      <Queue queue={simulation.queue} />

      <AttendingBox attending={simulation.attending} />

      <CompletedList completed={simulation.completed} />

    </div>
  );
}

export default Si;