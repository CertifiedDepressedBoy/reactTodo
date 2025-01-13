import React from 'react'
import Cart from './Cart'

const List = ({tasks, deleteBtn , checkBtn}) => {
  return (
    <div>
        <ol className="list-group list-group-numbered mt-5 w-75">
            <Cart tasks={tasks} deleteBtn={deleteBtn} checkBtn={checkBtn}/>
        </ol>
    </div>
  )
}

export default List
