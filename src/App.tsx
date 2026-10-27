import { players } from "./data/players";

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center flex-col">
      <h1 className="text-6xl font-bold">
        <span className="text-p1">Duel</span>{" "}
        <span className="text-p2">vs</span>
      </h1>

    <ul className="mt-8">
      {players.map((player) =>(
        <li className="space-y-2" key={player.id}>
          <span className="text-white"> {player.name} </span>
          <span className="text-neutral-400"> {player.club} </span>
        </li>
      )
    )}
    </ul>

    </div>
  );
}

export default App;
