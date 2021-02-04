import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Listcomp from './Listcomp';
const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);
   
    const inputEvent = (event) => {
        setItem(event.target.value);
    }

    const listOfItem = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item]
        })
        setItem("");
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add Item" value={item} onChange={inputEvent} />
                    <Button className="newBtn" onClick={listOfItem}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>

                        {
                            newitem.map((val, index) => {
                                return <Listcomp key={index} text={val} />
                             })
                        }
                    </ol>
                    <br />
                </div>
            </div>
        </>
    )
}
export default ToDoList;
