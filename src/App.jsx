import React, { useEffect, useState} from 'react'
import './App.css'
import List from './components/List'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { api } from './api/apiResources'
import Form from './components/Form'
import { v4 as uuidv4 } from 'uuid';


const App = () => {
    const [tasks,setTasks] = useState([])

    const fetchData = async () => {
        const res = await api.get("/todo")
        setTasks(res.data)
    }

    useEffect(() => {
        fetchData()
    },[tasks])

    const submit = async (ref) => {
        const data = {
            id : uuidv4(),
            task: ref.current.value,
            complete: false,
        };
        await api.post('/todo',data)
    };

    const deleteBtn = async (task_id) => {
        const res = await api.delete(`/todo/${task_id}`)
    }

    const checkBtn = async (task_id,complete) => {
        await api.patch(`/todo/${task_id}`,{complete})

    }

  return (
    <div className='mx-auto w-50 mt-5'>
        <Form submit={submit}/>
        <List tasks={tasks} deleteBtn={deleteBtn} checkBtn={checkBtn}/>
    </div>
  )
}

export default App
