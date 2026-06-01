import Person from "./Person";

function Queue({ queue }) {

  return (
    <div className="flex gap-4 mt-10">

      {queue.map(person => (
        <Person
          key={person.id}
          person={person}
        />
      ))}

    </div>
  );
}

export default Queue;