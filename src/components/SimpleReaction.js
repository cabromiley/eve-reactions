export default function SimpleReaction({ reactions }) {
    return (
        <div>
            {reactions.map((reaction) => (
                <div key={reaction.name}>{reaction.name}</div>
            ))}
        </div>
    )
}