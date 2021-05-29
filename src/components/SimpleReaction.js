export default function SimpleReaction({ reactions, title }) {
    return (
        <div>
            <h3 className="block bg-blue-600 p-2 text-white">{title ?? 'Reaction'}</h3>
            {reactions.map((reaction) => (
                <div
                    key={reaction.name}
                    className="block p-2 select-none focus:outline-none"
                >
                    {reaction.name}
                </div>
            ))}
        </div>
    )
}