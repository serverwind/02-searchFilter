import { useState } from "react";
import data from "../data/users.json";
import Form from "./Form";
import Users from "./Users";

export default function Main() {
  let [users, setUsers] = useState([]);

  function handleUsers(input) {
    input = input.toLowerCase();
    setUsers(data.filter((user) => user.name.toLowerCase().includes(input)));
  }

  return (
    <div>
      <Form action={(e) => handleUsers(e.target.value)} />
      <Users users={users} data={data} />
    </div>
  );
}
