import { useState } from "react";
import games from "../mock/mockData";

export default function ShowCards() {
  const [gameList, setGameList] = useState(games);
  //console.log(gameList);
  return (
    <div>
      {gameList.map((game) => (
        <div key={game.id}>
          <h2>{game.titolo}</h2>
          <img
            src={game.coverImage}
            alt={game.titolo}
            style={{ width: "200px", height: "300px" }}
          />
          <p>Genere: {game.genere}</p>
          <p>Piattaforma: {game.piattaforma}</p>
          <p>Prezzo: ${game.prezzo}</p>
          <p>Anno di Uscita: {game.annoUscita}</p>
          <p>Voto: {game.voto}/10</p>
          <p>Stato: {game.stato}</p>
          <p>Ore Giocate: {game.oreGiocate}</p>
          <p>Difficoltà: {game.difficolta}</p>
        </div>
      ))}
    </div>
  );
}
