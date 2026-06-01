function Controls({
  addPerson,
  resetSimulation
}) {

  return (

    <div className="flex gap-4 mt-6">

      <button
        onClick={addPerson}
        className="
          bg-blue-500
          px-4 py-2
          rounded
        "
      >
        Agregar Persona
      </button>

      <button
        onClick={resetSimulation}
        className="
          bg-red-500
          px-4 py-2
          rounded
        "
      >
        Reiniciar
      </button>

    </div>
  );
}

export default Controls;