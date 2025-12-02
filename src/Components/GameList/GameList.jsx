import "../GameList/GameList.css";
export default function GameList({ giochi }) {
  return (
    <div className="page">
      <div className="container">
        {giochi.map((game) => (
          <div key={game.id} className="card">
            <h2>{game.titolo}</h2>
            <img src={game.coverImage} alt={game.titolo} />
            <p>Piattaforma: {game.piattaforma}</p>
            <p>Prezzo: ${game.prezzo}</p>
            <p>Voto: {game.voto}/10</p>
            <p>Difficoltà: {game.difficolta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
