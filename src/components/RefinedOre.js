export default function RefinedMaterials({ refinedMaterials }) {
    return (
        <div>
            {refinedMaterials.map((goo, index) => (<div key={index}>{goo}</div>))}
        </div>
    )
}