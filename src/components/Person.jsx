function Person({ person }) {

  const colors = {
    esperando: "bg-yellow-400",
    atendiendo: "bg-blue-500",
    completado: "bg-green-500"
  };

  return (
    <div className={`
      w-16 h-16 rounded-full
      flex items-center justify-center
      font-bold text-black
      ${colors[person.estado]}
    `}>
      👤
    </div>
  );
}

export default Person;