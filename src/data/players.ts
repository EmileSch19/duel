import type { Player } from "../types/player";


export const players: Player[] = [
  {
    id: 1,
    name: "Kylian Mbappé",
    club: "Real Madrid",
    position: "Attaquant",
    stats: {
      attack: {
        goals: 30,
        shots: 85,
      },
      creation: {
        assists: 8,
        keyPasses: 25,
      },
      defense: {
        tackles: 12,
        interceptions: 5,
      },
    },
  },
  {
    id: 2,
    name: "Jude Bellingham",
    club: "Real Madrid",
    position: "Milieu",
    stats: {
      attack: {
        goals: 15,
        shots: 50,
      },
      creation: {
        assists: 10,
        keyPasses: 45,
      },
      defense: {
        tackles: 35,
        interceptions: 20,
      },
    },
  },
  {
    id: 3,
    name: "Rodri",
    club: "Manchester City",
    position: "Milieu",
    stats: {
      attack: {
        goals: 8,
        shots: 30,
      },
      creation: {
        assists: 6,
        keyPasses: 40,
      },
      defense: {
        tackles: 55,
        interceptions: 45,
      },
    },
  },
  {
    id: 4,
    name: "Virgil van Dijk",
    club: "Liverpool",
    position: "Défenseur",
    stats: {
      attack: {
        goals: 4,
        shots: 15,
      },
      creation: {
        assists: 2,
        keyPasses: 8,
      },
      defense: {
        tackles: 40,
        interceptions: 50,
      },
    },
  },
  {
    id: 5,
    name: "Alisson Becker",
    club: "Liverpool",
    position: "Gardien",
    stats: {
      attack: {
        goals: 0,
        shots: 0,
      },
      creation: {
        assists: 1,
        keyPasses: 2,
      },
      defense: {
        tackles: 2,
        interceptions: 5,
      },
    },
  },
];
