import { useState } from 'react';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

import type { ITask } from './interface/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  
  const [taskToUpdate, setTaskToUpdate] = useState<ITask|null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");

    if (display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask): void => {
    console.log("metodo acionado");
    hideOrShowModal(true);
    setTaskToUpdate(task)
  }

  return (
    <>
      <Modal children={<TaskForm taskList={taskList} task={taskToUpdate}/>}></Modal>

      <Header></Header>
      
      <main className='main'>
        <div>
          <h2>O que você precisa fazer?</h2>
          <TaskForm taskList={taskList} setTaskList={setTaskList} ></TaskForm>
        </div>

        <div>
          <h2>Lista de Tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}></TaskList>
        </div>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
