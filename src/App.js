import { useActiveOres } from "./hooks/ores";
import data from './data';
import Ore from "./components/Ore";
import RefinedOre from "./components/RefinedOre";
import SimpleReaction from "./components/SimpleReaction";

export default function App() {
  const { ores, simple, composite } = data()
  const [activeOres, toggleOre] = useActiveOres()
  const refinedMaterials = calculateRefinedMaterials(ores, activeOres)
  const activeSimpleReactions = calculateSimpleReactions(simple, refinedMaterials)
  const activeCompositeReations = calculateCompositeReactions(composite, activeSimpleReactions)

  return (
    <div className="container mx-auto mt-8">
      <div className="my-4">
        <h1 className="text-lg font-bold">Reaction Chart</h1>
        <div>
          Select the moon ores you have available and the chart will populate what you can do with your ore
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-4">
        <Ore ores={ores} toggleOre={toggleOre} activeOres={activeOres} />

        <RefinedOre refinedMaterials={refinedMaterials} title="Refined ore" />

        <SimpleReaction reactions={activeSimpleReactions} title="Simple reaction" />

        <SimpleReaction reactions={activeCompositeReations} title="Composite Reaction" />
      </div>
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

function calculateSimpleReactions(reactions, availableIngrediants) {
  const filterRequirements = (requirement) => !availableIngrediants.includes(requirement)

  return reactions.filter(reaction => reaction.requirements.filter(filterRequirements).length === 0)
}

function calculateCompositeReactions(reactions, availableIngrediants) {
  const availableIngrediantsList = availableIngrediants.map(i => i.name)
  const filterRequirements = (requirement) => !availableIngrediantsList.includes(requirement)

  return reactions.filter(reaction => reaction.requirements.filter(filterRequirements).length === 0)
}