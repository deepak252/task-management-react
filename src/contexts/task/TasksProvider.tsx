import { useEffect, useMemo, useState } from 'react'
import { TasksContext } from './TasksContext'
import { Task, TaskFilterOption } from '@/types/task.types'
import { taskFilterOptions } from '@/constants/appConstants'

const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState(taskFilterOptions[0])
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter.value === 'all') return true
      return task.status === filter.value
    })
  }, [tasks, filter])

  useEffect(() => {
    const stored = localStorage.getItem('tasks')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) setTasks(parsed)
      } catch (err) {
        console.error('Failed to parse tasks from localStorage:', err)
      }
    }
  }, [])

  const saveTasks = (updated: Task[]) => {
    setTasks(updated)
    localStorage.setItem('tasks', JSON.stringify(updated))
  }

  const addTask = ({
    title,
    description,
  }: {
    title: string
    description?: string
  }) => {
    const task: Task = {
      id: Date.now().toString(),
      title,
      description,
      createdAt: new Date().toISOString(),
      status: 'pending',
      pos: tasks.length,
    }
    saveTasks([...tasks, task])
    return true
  }

  const completeTask = (id: string) => {
    const updated: Task[] = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === 'pending' ? 'completed' : 'pending',
          }
        : task
    )
    saveTasks(updated)
    return true
  }

  const deleteTask = (id: string) => {
    const updated = tasks.filter((task) => task.id !== id)
    saveTasks(updated)
    return true
  }

  const applyFilter = (option: TaskFilterOption) => {
    if (!option || option.value === filter.value) {
      return
    }
    setFilter(option)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filter,
        filteredTasks,
        addTask,
        completeTask,
        deleteTask,
        applyFilter,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider
