import { useCallback } from 'react'
import { TaskItemMemo } from './TaskItem'
import { useTasks } from '@/hooks/useTasks'

export const TasksList = () => {
  const { filteredTasks, deleteTask, completeTask } = useTasks()

  const handleComplete = useCallback(
    (id: string) => {
      completeTask(id)
    },
    [completeTask]
  )

  const handleDelete = useCallback(
    (id: string) => {
      deleteTask(id)
    },
    [deleteTask]
  )

  return (
    <div className="grid gap-6 my-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {filteredTasks?.map((task) => (
        <TaskItemMemo
          key={task.id}
          task={task}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      ))}

      {!filteredTasks.length && (
        <div className="font-light text-neutral-500 mt-8">
          No tasks available!
        </div>
      )}
    </div>
  )
}
