import "./App.css";
import { useState } from "react";
import games from "./mock/mockData.js";
import Header from "./Components/Header/Header.jsx";
import GameList from "./Components/GameList/GameList.jsx";
function App() {
  const [gameList, setGameList] = useState(games);
  const [searchText, setSearchText] = useState("");
  const [searchSelect, setSearchSelect] = useState("tutti");
  const filteredGames = gameList.filter((game) => {
    return game.titolo.toLowerCase().includes(searchText);
  });
  const filterdStato = filteredGames.filter((st) => {
    return searchSelect === "tutti" || st.stato === searchSelect;
  });
  return (
    <>
      <Header
        numGame={gameList.length}
        search={searchText}
        setSearch={setSearchText}
        searchSelect={searchSelect}
        setSearchSelect={setSearchSelect}
      />
      <GameList giochi={filterdStato} />
    </>
  );
}

export default App;
