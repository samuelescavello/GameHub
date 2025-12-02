export default function Header({
  numGame,
  search,
  setSearch,
  searchSelect,
  setSearchSelect,
}) {
  return (
    <div>
      <h1>GameHub Samu giochi: {numGame} </h1>
      <input
        type="text"
        placeholder="cerca gioco.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        name="giochi"
        id="giochi"
        value={searchSelect}
        onChange={(e) => setSearchSelect(e.target.value)}
      >
        <option value="tutti">Tutti i giochi</option>
        <option value="completato">Giochi completati</option>
        <option value="in-corso">Giochi in corso</option>
        <option value="wishlist">Wishlist</option>
      </select>
    </div>
  );
}
