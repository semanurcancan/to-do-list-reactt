
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



function Section({ toDoList, addToDo, filterState }) {
    const [currentList, setCurrentList] = useState(toDoList)

    const markAsCompleted = (e) => {
        let newList = toDoList.map(item => {
            return item.id == e.currentTarget.id ? { ...item, completed: !item.completed } : { ...item }
        })
        addToDo(newList)
    }
    const markAllAsCompleted = () => {
        let newList = toDoList.map(item => {
            return { ...item, completed: true }
        })
        addToDo(newList)
    }
    useEffect(() => {
        setCurrentList(toDoList)
    }, [toDoList])

    useEffect(() => {
        console.log(filterState);
        if (filterState == "all") {
            setCurrentList(toDoList)
        } else if (filterState == "active") {
            setCurrentList(toDoList.filter(item => item.completed == false))
        } else if (filterState == "complete") {
            setCurrentList(toDoList.filter(item => item.completed == true))
        };
    }, [filterState]);

    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all" onClick={markAllAsCompleted}>
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {currentList.map((element, i) => (
                        <li className={element.completed ? "completed" : ""} key={i}>
                            <div className="view">
                                <input id={element.id} className="toggle" type="checkbox" checked={element.completed} onClick={markAsCompleted} />
                                <label>{element.value}</label>
                                <button className="destroy"></button>
                            </div>
                        </li>
                    ))}


                </ul>
            </section>
        </div>
    )
}

export default Section