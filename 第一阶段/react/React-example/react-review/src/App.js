import React,{useState} from 'react'

export default function App() {
    const [n,setN]=useState(0);
    return (
        <div>
            <button>-</button>
    <span>{n}</span>
    <button>+</button>
        </div>
    )
}
