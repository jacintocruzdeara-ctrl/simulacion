import Person from "./Person";

function AttendingBox({ attending }) {

  return (
    <div className="mt-10">

      <h2 className="text-2xl mb-4">
        Atendiendo
      </h2>

      {attending && (
        <Person person={attending} />
      )}

    </div>
  );
}

export default AttendingBox;