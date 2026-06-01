import React, {useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from 'react';

import styles from "./TaskForm.module.css"

import type { ITask } from '../interface/Task'

interface Props {
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
    task?: ITask|null;
}

const TaskForm = ({taskList, setTaskList, task}: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");

    useEffect(() => {
        if (task) {
            setId(task.id);
            setTitle(task.title);
            setDifficulty(task.difficulty);
        }
    }, [task])

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const id = Math.floor(Math.random() * 1000);

        const newTask: ITask = {id, title, difficulty}

        setTaskList!([...taskList, newTask])

        setTitle('');
        setDifficulty('');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>) => {
        if(e.target.name === 'title') {
            setTitle(e.target.value);
        } else {
            setDifficulty(e.target.value);
        }
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    placeholder='Ex: Ler por uma hora' 
                    required 
                    value={title}
                    onChange={handleChange}/>
            </div>

            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <select 
                    name="difficulty" 
                    id="difficulty" 
                    required
                    value={difficulty}
                    onChange={handleChange}                    
                >
                    <option value="" disabled>Selecione a dificuldade</option>
                    <option value="easy">Facil</option>
                    <option value="medium">Moderado</option>
                    <option value="hard">Dificil</option>
                </select>
            </div>

            <input type="submit" value="Criar Tarefa" />
        </form>
    )
}

export default TaskForm