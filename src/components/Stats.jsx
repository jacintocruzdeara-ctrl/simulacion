function Stats({ queue, completed }) {

  return (
    <div className="grid grid-cols-2 gap-4">

      <div className="bg-zinc-800 p-4 rounded">
        En cola: {queue.length}
      </div>

      <div className="bg-zinc-800 p-4 rounded">
        Atendidos: {completed.length}
      </div>

    </div>
  );
}

export default Stats;