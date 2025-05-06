import { DropdownOption } from '@/components/Dropdown'

export type TaskStatus = 'pending' | 'completed'

export type TaskFilterOption = DropdownOption<string, TaskStatus | 'all'>

export type Task = {
  id: string
  title: string
  description?: string
  pos: number
  status: TaskStatus
  createdAt: string
}

export type TasksContextType = {
  tasks: Task[]
  filteredTasks: Task[]
  filter: TaskFilterOption
  addTask: ({
    title,
    description,
  }: {
    title: string
    description?: string
  }) => boolean
  completeTask: (id: string) => boolean
  deleteTask: (id: string) => boolean
  applyFilter: (option: TaskFilterOption) => void
}
