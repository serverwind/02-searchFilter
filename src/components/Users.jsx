export default function Users({ users, data }) {
  /*
   * component linked to Main.jsx
   * if user doesn't input anything it will return
   * all users from users.json
   *
   * */
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
