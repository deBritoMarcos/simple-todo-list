import { useState } from 'react'

import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

import type { ITask } from './interface/Task'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    )
  }

  return (
    <>
      <Header></Header>
      
      <main className='main'>
        <div>
          <h2>O que você precisa fazer?</h2>
          <TaskForm taskList={taskList} setTaskList={setTaskList} ></TaskForm>
        </div>

        <div>
          <h2>Lista de Tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask}></TaskList>
        </div>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
