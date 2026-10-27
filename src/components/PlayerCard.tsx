import type { Player } from "../types/player";

export type PlayerCardProps ={
    player : Player
};
const PlayerCard = ({player}: PlayerCardProps)=>{
    return(
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <h2 className="text-2xl">{player.name}</h2>
            <p className="text-neutral-400">
                {player.club} ~ {player.position}
            </p>
        </div>
    )
}

export default PlayerCard;