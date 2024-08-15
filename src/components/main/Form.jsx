export default function Form({ action }) {
  return (
    <div className="my-3">
      <input className="py-2 px-3 border border-gray-300 hover:border-gray-400 transition duration-300" type="text" onInput={action} placeholder="Search..."></input>
    </div>
  );
}
