function Ore({ ores, activeOres, toggleOre }) {
  const oreList = ores.map((ore) => (
    <Item
      key={ore.name}
      oreName={ore.name}
      active={activeOres.includes(ore.name)}
      addActive={toggleOre}
    ></Item>
  ));

  return (
    <div>
      <h3 className="block bg-blue-600 p-2 text-white">Moon Ores</h3>
      {oreList}
    </div>);
}

function Item({ oreName, active, addActive }) {
  return (
    <button
      onClick={() => addActive(oreName)}
      className={
        "block p-2 select-none focus:outline-none " +
        (active ? "text-green-500 hover:text-red-700" : "hover:text-green-700")
      }
    >
      {oreName}
    </button>
  );
}

export default Ore;
