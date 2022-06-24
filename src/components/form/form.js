import { useState } from 'react'

function Form({addToDo, toDoList}) {
    const [form, setForm]= useState("");
    const onChangeInput =(e)=>{
        setForm(e.target.value);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        if(form == ""){
            return false
        };
        addToDo([...toDoList, {value:form,completed:false, id:toDoList.length}]);
        setForm("")
       
    };
    return (
        <div>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                </header>
            </section>

            <form onSubmit={onSubmit}>
                <input 
                className="new-todo" 
                placeholder="What needs to be done?" 
                autoFocus 
                value={form}
                onChange={onChangeInput}/>
            </form>
           
        </div>
    )
}

export default Form