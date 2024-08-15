import { useState } from 'react';
import data from '../data/users.json';

export default function Main() {
  let [users, setUsers] = useState([]);

  function handleUsers(input) {
    setUsers(data.filter((user) => user.name.includes(input)));
  }

  return (
    <div>
      <Form action={(e) => handleUsers(e.target.value)}/>
      <Output users={users} data={data} />
    </div>
  );
}

function Form({action}) {
  return (
    <div>
      <input type="text" onInput={action}></input>
    </div>
  );
}

function Output({users, data}) {
  if (users.length === 0) {
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
    
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
