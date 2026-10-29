import { players } from "./data/players";
import PlayerCard from "./components/PlayerCard";
import { useState } from "react";

function App() {

  const [query, setQuery] = useState("");
  const filteredPlayers = players.filter((player) =>
  player.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center flex-col p-4">
      <h1 className="text-6xl font-bold">
        <span className="text-p1">Duel</span>{" "}
        <span className="text-p2">vs</span>
      </h1>

      <input
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        placeholder="Rechercher un joueur..."
        className="w-full max-w-md mt-8 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 outline-none"
      />


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mt-8">
  {filteredPlayers.map((player) => (
    <PlayerCard key={player.id} player={player} />
  ))}

  </div>
    {filteredPlayers.length === 0 && (
      <p className="text-neutral-500 mt-8">Aucun joueur trouvé</p>
    )}

  </div>
);
}
    

export default App;
