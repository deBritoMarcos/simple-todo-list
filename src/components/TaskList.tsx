import style from "./TaskList.module.css";

import type { ITask } from "../interface/Task";

interface Props {
    taskList: ITask[];
    handleDelete(id: number): void;
}

const TaskList = ({taskList, handleDelete}: Props) => {
  return (
    <>
        {taskList.length > 0 ? (
            taskList.map((task) => (
                <div key={task.id} className={style.task}>
                    <div className={style.details}>
                        <h4>{task.title}</h4>
                        <p>{task.difficulty}</p>
                    </div>
                    <div className={style.actions}>
                        <button>
                            <i className="bi bi-pencil"></i>                           
                        </button>  
                         <button onClick={() => handleDelete(task.id)}>
                            <i className="bi bi-trash"></i>                         
                        </button>
                    </div>
                </div>
            ))
        ) : (
            <p>Não há tarefas cadastradas</p>
        )}
    </>
  )
}

export default TaskList