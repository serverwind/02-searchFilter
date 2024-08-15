export default function Form({ action }) {
  return (
    <div>
      <input type="text" onInput={action}></input>
    </div>
  );
}
