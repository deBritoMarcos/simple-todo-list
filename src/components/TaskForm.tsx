import React, { useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from 'react';

import styles from "./TaskForm.module.css"

import type { ITask } from '../interface/Task'
import { Difficulty } from '../interface/Task'

interface Props {
    initialTask?: ITask | null;
    onSubmit: (task: Omit<ITask, 'id' | 'createdAt'>) => void;
}

const TaskForm = ({ initialTask, onSubmit }: Props) => {

    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<Difficulty | "">("");

    useEffect(() => {
        if (initialTask) {
            setTitle(initialTask.title);
            setDifficulty(initialTask.difficulty);
        }
    }, [initialTask])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title.trim() || !difficulty) {
            return;
        }

        onSubmit({
            title: title.trim(),
            difficulty: difficulty as Difficulty,
            completed: initialTask?.completed || false,
        });

        setTitle('');
        setDifficulty('');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        } else {
            setDifficulty(e.target.value as Difficulty | "");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder='Ex: Ler por uma hora'
                    required
                    value={title}
                    onChange={handleChange}
                    aria-label="Título da tarefa"
                />
            </div>

            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <select
                    name="difficulty"
                    id="difficulty"
                    required
                    value={difficulty}
                    onChange={handleChange}
                    aria-label="Nível de dificuldade"
                >
                    <option value="" disabled>Selecione a dificuldade</option>
                    <option value={Difficulty.EASY}>Fácil</option>
                    <option value={Difficulty.MEDIUM}>Moderado</option>
                    <option value={Difficulty.HARD}>Difícil</option>
                </select>
            </div>

            <input
                type="submit"
                value={initialTask ? "Atualizar Tarefa" : "Criar Tarefa"}
                aria-label={initialTask ? "Atualizar tarefa" : "Criar nova tarefa"}
            />
        </form>
    )
}

export default TaskForm
