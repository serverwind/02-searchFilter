import data from '../data/users.json';

export default function Main() {
  return (
    <div>
      <Form />
      <Output />
    </div>
  );
}

function Form() {
  return (
    <div>
      <input type="text"></input>
    </div>
  );
}

function Output() {
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
