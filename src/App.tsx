import { players } from "./data/players";
import PlayerCard from "./components/PlayerCard";

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center flex-col p-4">
      <h1 className="text-6xl font-bold">
        <span className="text-p1">Duel</span>{" "}
        <span className="text-p2">vs</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mt-8">
  {players.map((player) => (
    <PlayerCard key={player.id} player={player} />
  ))}
</div>

    </div>
  );
}

export default App;
