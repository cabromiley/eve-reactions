function Ore({ ores, activeOres, toggleOre }) {
  const oreList = ores.map((ore) => (
    <Item
      key={ore.name}
      oreName={ore.name}
      active={activeOres.includes(ore.name)}
      addActive={toggleOre}
    ></Item>
  ));

  return <div>{oreList}</div>;
}

function Item({ oreName, active, addActive }) {
  return (
    <button
      onClick={() => addActive(oreName)}
      className={
        "block p-2 cursor-pointer select-none focus:outline-none " +
        (active ? "text-green-500" : "")
      }
    >
      {oreName}
    </button>
  );
}

export default Ore;
