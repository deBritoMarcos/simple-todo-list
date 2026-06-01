import React from "react";

import style from "./TaskItem.module.css";

import type { ITask } from "../interface/Task";
import { DIFFICULTY_LABELS } from "../utils/constants";

interface TaskItemProps {
    task: ITask;
    onEdit: (task: ITask) => void;
    onDelete: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
    const handleEdit = () => onEdit(task);
    const handleDelete = () => onDelete(task.id);

    return (
        <div
            className={style.task}
            data-testid={`task-${task.id}`}
            role="article"
        >
            <div className={style.details}>
                <h4>{task.title}</h4>
                <span
                    className={`${style.difficulty} ${style[task.difficulty]}`}
                    title={`Dificuldade: ${DIFFICULTY_LABELS[task.difficulty]}`}
                >
                    {DIFFICULTY_LABELS[task.difficulty]}
                </span>
            </div>
            <div className={style.actions}>
                <button
                    onClick={handleEdit}
                    aria-label={`Editar tarefa: ${task.title}`}
                    title="Editar tarefa"
                    className={style.edit_button}
                >
                    <i className="bi bi-pencil"></i>
                </button>
                <button
                    onClick={handleDelete}
                    aria-label={`Deletar tarefa: ${task.title}`}
                    title="Deletar tarefa"
                    className={style.delete_button}
                >
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    );
};
