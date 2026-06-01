import Person from "./Person";

function CompletedList({ completed }) {

  return (
    <div className="mt-10">

      <h2 className="text-2xl mb-4">
        Completados
      </h2>

      <div className="flex gap-4 flex-wrap">

        {completed.map(person => (
          <Person
            key={person.id}
            person={person}
          />
        ))}

      </div>

    </div>
  );
}

export default CompletedList;