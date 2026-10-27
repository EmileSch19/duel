//Type de position
export type Position = "Gardien" | "Défenseur" | "Milieu" | "Attaquant";
// type player
export type Player ={
    id: number;
    name: string;
    club: string;
    position: Position;
    stats:{
        attack:{
            goals: number;
            shots: number;
        }
        creation:{
            assists: number;
            keyPasses: number;
        }
        defense:{
            tackles: number;
            interceptions: number;
        }
    }
};


