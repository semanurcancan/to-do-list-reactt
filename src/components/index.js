import React, { useState } from 'react'
import Form from './form/form'
import Footer from './footer/footer'
import Section from './section/section'

function Index() {
    const [toDoList, addToDo]= useState([{value:"test", completed:false, id:0},{value:"javaScript", completed:false, id:1},{value:"learn React", completed:false, id:2},{value:"have e life!", completed:false, id:3}]);

    const [filterState, setFilterState]=useState("all")


    return (
        <div>
            <Form  addToDo={addToDo} toDoList={toDoList}/>
            <Section toDoList={toDoList} addToDo={addToDo} filterState={filterState}/>
            <Footer toDoList={toDoList} addToDo={addToDo} setFilter={setFilterState} filterState={filterState}/>
        </div>
    )
}

export default Index