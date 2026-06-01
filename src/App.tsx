import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Modal } from './components/Modal';

import { useTaskManager } from './hooks/useTaskManager';

function App() {
  const { taskList, taskToUpdate, setTaskToUpdate, addTask, deleteTask, updateTask } =
    useTaskManager();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditTask = (task: ITask) => {
    setTaskToUpdate(task);
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        title="Editar Tarefa"
        onClose={() => {
          setTaskToUpdate(null);
          setIsModalOpen(false);
        }}
      >
        <TaskForm
          initialTask={taskToUpdate}
          onSubmit={(task) => {
            taskToUpdate ? updateTask({ ...taskToUpdate, ...task }) : addTask(task);
            setIsModalOpen(false);
          }}
        />
      </Modal>

      <Header />

      <main className="main">
        <div>
          <h2>O que você precisa fazer?</h2>
          <TaskForm onSubmit={addTask} />
        </div>

        <div>
          <h2>Lista de Tarefas:</h2>
          <TaskList
            taskList={taskList}
            onDelete={deleteTask}
            onEdit={handleEditTask}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;