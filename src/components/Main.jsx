import { useState } from "react";
import data from "../data/users.json";
import Form from "./Form";
import Users from "./Users";

export default function Main() {
  /*
   * 1. state for filtered users
   * 2. handleUsers - filter users
   *
   */
  let [users, setUsers] = useState([]);

  function handleUsers(input) {
    input = input.toLowerCase();
    /* I know, it's hard to read but I have to do it :)
     * if input length > 2 - apply .filter,
     * put user.name to lowercase and check if includes input.*/
    input.length > 2 ? setUsers(data.filter((user) => user.name.toLowerCase().includes(input))) : setUsers([]);
  }

  return (
    <div>
      <Form action={(e) => handleUsers(e.target.value)} />
      <Users users={users} data={data} />
    </div>
  );
}
