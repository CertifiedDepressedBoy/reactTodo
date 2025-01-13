import React from 'react'

const Cart = ({tasks , deleteBtn , checkBtn}) => {
    const deleteBtnHandler = (task_id) => {
        if(confirm('Are you sure?')){
            deleteBtn(task_id)
        }
    }

  return (
    <div>
        {
            tasks.map((task)=>(
                <div className={task.complete ? 'text-decoration-line-through' : ''} key={task.id}>
                    <li className="list-group-item d-flex align-items-center">
                        <input type="checkbox" checked={task.complete} className='form-check-input me-3 p-2' onClick={() => checkBtn(task.id,!task.complete)}/>

                        <div className="col-10 " >{task.task}</div>

                    <div className="col-1 btn btn-danger p-2" onClick={() => deleteBtnHandler(task.id) }>
                        <i className="fa-solid fa-trash"></i>
                    </div>
                    </li>
                </div>
            ))
        }
    </div>
  )
}

export default Cart
