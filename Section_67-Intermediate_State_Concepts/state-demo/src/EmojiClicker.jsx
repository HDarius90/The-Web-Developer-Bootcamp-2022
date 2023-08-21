import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function EmojiClicker() {
    function randomEmoji() {
        const emojis = ["😣", "🤩", "😛", "🤐", "😙", "😉"];
        return emojis[Math.floor(Math.random() * emojis.length)]
    }
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: randomEmoji() }]);
    };
    const deleteEmoji = (id) => {
        setEmojis((prevEmojis) => {
            return prevEmojis.filter((e) => e.id !== id)
        });
    };
    const turnHeart = () => {
        setEmojis((prevEmojis) => {
            return prevEmojis.map((e) => {
                return { ...e, emoji: "💘" }
            })
        })
    }
    return (
        <div>
            {emojis.map((e) => (
                <span
                    onClick={() => deleteEmoji(e.id)}
                    key={e.id}
                    style={{ fontSize: '4rem' }}>
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={turnHeart}>Make everything heart</button>
        </div>
    );
}