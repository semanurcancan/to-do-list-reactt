import React from 'react'

function Footer({ toDoList, addToDo, setFilter, filterState}) {
  

  const showAll = () => {
   setFilter("all")
  }

  const showActive = () => {
    // const complete = orgList.filter(item => item.completed == false)
    // addToDo(complete)
    setFilter("active")
  }

  const completed = () => {
    // const complete = orgList.filter(item => item.completed == true)
    // addToDo(complete)
    setFilter("complete")
  }
  const clearCompleted = () => {
    const result = toDoList.filter(item => item.completed == false)
    addToDo(result)
  }
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{toDoList.filter(item => item.completed == false).length}</strong>
          items left
        </span>

        <ul className="filters">
          <li onClick={showAll}>
            <a href="#/" className={filterState=="all" ? "selected": ""}>All</a>
          </li>
          <li onClick={showActive}>
            <a href="#/" className={filterState=="active" ? "selected": ""}>Active </a>
          </li>
          <li onClick={completed}>
            <a href="#/" className={filterState=="complete" ? "selected": ""}>Completed</a>
          </li>
        </ul>

        <button onClick={clearCompleted} className="clear-completed">
          Clear completed
        </button>
      </footer>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  )
}

export default Footer