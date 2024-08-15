import data from "../data/data.json";

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <h1 className="text-center text-3xl font-bold">{data.header}</h1>
    </header>
  );
}
