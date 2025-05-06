import { TasksContext } from '@/contexts/task/TasksContext'
import { useContext } from 'react'

export const useTasks = () => {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider')
  }
  return context
}
