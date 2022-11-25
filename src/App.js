import './App.css';
import React, {useEffect, useState} from "react";
import Card from "./components/card";

function App() {
    const [itemArray, setItemArray] = useState([])
    const [latestSelected, setLatestSelected] = useState(null)

    function addNewItem() {
        const id = Math.random()
        setItemArray([...itemArray, {id: id}])
        setLatestSelected(id)
    }

    function handleSendId(id) {
        setLatestSelected(id)
    }

    function checkIsSelected(item) {
        return item.id == latestSelected
    }

    function removeItem() {
        if (!latestSelected) return;
        const newItemArray = itemArray.filter(item => item.id != latestSelected)
        setItemArray(newItemArray)
    }

    function handleClick(e) {
        if (!e.target.id) setLatestSelected(null)
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [])

    return (
        <main>
            <div className='buttons'>
                <button id='add' onClick={addNewItem}>Add item</button>
                <button onClick={removeItem}>Remove item</button>
            </div>
            {itemArray.map(item => <Card isSelected={checkIsSelected(item)} sendId={handleSendId} id={item.id}
                                         key={item.id}/>)}
        </main>
    );
}

export default App;
