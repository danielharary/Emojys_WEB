import React from 'react';
import './style.css';
const emojis = [
    {
        emoji: "😝"
    },
    {
        emoji: "😜"
    },
    {
        emoji: "🙂"
    },
    {
        emoji: "😙"
    },
    {
        emoji: "😋"
    },
    {
        emoji: "😊"
    },
    {
        emoji: "😆"
    },
    {
        emoji: "😅"
    },
    {
        emoji: "😄"
    },
    {
        emoji: "😃"
    },
    {
        emoji: "🤣"
    },
    {
        emoji: "😂"
    },
    {
        emoji: "😁"
    },
    {
        emoji: "😀"
    }
];

const Page = () => {
    return (<div>
        <div className="wrapper">
            {emojis.map((item, idx) => (
                <div className="emoji" key={idx}> {item.emoji} </div>))}
        </div>
    </div>);
}

export default Page;
