import { TasksContextType } from '@/types/task.types'
import { createContext } from 'react'

export const TasksContext = createContext<TasksContextType | undefined>(
  undefined
)
