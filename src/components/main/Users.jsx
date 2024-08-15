export default function Users({ users, data }) {
  /*
   * component linked to Main.jsx
   * if user doesn't input anything it will return
   * all users from users.json
   *
   * */
  if (users.length === 0) {
    return (
      <ul className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-4 text-white text-center">
        {data.map((user) => (
          <li className="p-4 bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition duration-300 cursor-pointer" key={user.id}> {user.name} </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-4 text-white text-center">
      {users.map((user) => (
          <li className="p-4 bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition duration-300 cursor-pointer" key={user.id}> {user.name} </li>
      ))}
    </ul>
  );
}
