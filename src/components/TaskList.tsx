import style from "./TaskList.module.css";

import type { ITask } from "../interface/Task";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
    taskList: ITask[];
    onDelete: (id: number) => void;
    onEdit: (task: ITask) => void;
}

const TaskList = ({ taskList, onDelete, onEdit }: TaskListProps) => {
    
    const isEmpty = taskList.length === 0;

    return (
        <div
            role="region"
            aria-label="Lista de tarefas"
            aria-live="polite"
            aria-busy={false}
        >
            {isEmpty ? (
                <p className={style.empty_message}>Não há tarefas cadastradas</p>
            ) : (
                <div className={style.task_list}>
                    {taskList.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskList;
