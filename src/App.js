import { useActiveOres } from "./hooks/ores";
import data from './data';
import Ore from "./components/Ore";
import RefinedOre from "./components/RefinedOre";
import SimpleReaction from "./components/SimpleReaction";

export default function App() {
  const { ores, simple } = data()
  const [activeOres, toggleOre] = useActiveOres()
  const refinedMaterials = calculateRefinedMaterials(ores, activeOres)
  const activeSimpleReactions = calculateSimpleReactions(simple, refinedMaterials)

  return (
    <div className="grid grid-flow-row grid-cols-4 gap-8">
      <Ore ores={ores} toggleOre={toggleOre} activeOres={activeOres} />

      <RefinedOre refinedMaterials={refinedMaterials} />

      <SimpleReaction reactions={activeSimpleReactions} />
    </div>
  );
}

function calculateRefinedMaterials(ores, activeOres) {
  const unique = (value, index, self) => self.indexOf(value) === index

  return ores
    .filter((ore) => activeOres.includes(ore.name))
    .map(ore => ore.goo.map(goo => goo.name))
    .flat()
    .filter(unique)
    .sort();
}

function calculateSimpleReactions(simple, refinedMaterials) {
  const filterRequirements = (requirement) => !refinedMaterials.includes(requirement)

  return simple.filter(reaction => reaction.requirements.filter(filterRequirements).length === 0)
}
