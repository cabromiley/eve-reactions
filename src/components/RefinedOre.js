export default function RefinedMaterials({ refinedMaterials, title }) {
    return (
        <div>
            <h3 className="block bg-blue-600 p-2 text-white">{title ?? 'Reaction'}</h3>
            {refinedMaterials.map((goo, index) => (
                <div
                    key={index}
                    className="block p-2 select-none focus:outline-none"
                >{goo}</div>
            ))}
        </div>
    )
}