import { useState, useCallback } from 'react';
import type { ITask } from '../interface/Task';

export const useTaskManager = () => {
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

    const addTask = useCallback((task: Omit<ITask, 'id'>) => {
        const newTask: ITask = {
            ...task,
            id: Date.now(),
        };

        setTaskList((prev) => [...prev, newTask]);
    }, []);

    const updateTask = useCallback((updatedTask: ITask) => {
        setTaskList((prev) =>
            prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
        
        setTaskToUpdate(null);
    }, []);

    const deleteTask = useCallback((id: number) => {
        setTaskList((prev) => prev.filter((task) => task.id !== id));
    }, []);

    return {
        taskList,
        taskToUpdate,
        setTaskToUpdate,
        addTask,
        deleteTask,
        updateTask,
    };
};