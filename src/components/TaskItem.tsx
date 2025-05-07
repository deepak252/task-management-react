import { Task } from '@/types/task.types'
import CheckIcon from '../assets/icons/check.svg?react'
import DeleteIcon from '../assets/icons/delete.svg?react'
import classNames from 'classnames'
import { memo } from 'react'
import _ from 'lodash'

interface TaskItemProps {
  task: Task
  onComplete: (id: string) => void
  onDelete: (id: string) => void
  onClick: (task: Task) => void
}

const TaskItem = ({ task, onComplete, onDelete, onClick }: TaskItemProps) => {
  return (
    <div
      className={classNames(
        'cursor-pointer rounded-lg shadow border p-3 dark:border-gray-800 hover:scale-105 duration-300',
        {
          'line-through bg-green-100 dark:bg-gray-800':
            task.status === 'completed',
        }
      )}
      onClick={() => onClick?.(task)}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <h5 className="font-semibold line-clamp-1 dark:text-white">
          {task.title}
        </h5>
        <div className="flex items-center gap-2">
          <button
            title="Complete"
            onClick={(e) => {
              e.stopPropagation()
              onComplete?.(task.id)
            }}
            className={classNames('border border-green rounded-full', {
              'bg-green rounded-full': task.status === 'completed',
            })}
          >
            <CheckIcon
              className={classNames('fill-green size-5', {
                '!fill-white': task.status === 'completed',
              })}
            />
          </button>
          <button
            title="delete"
            onClick={(e) => {
              e.stopPropagation()
              onDelete?.(task.id)
            }}
          >
            <DeleteIcon className="fill-red" />
          </button>
        </div>
      </div>
      <p className="text-sm text-neutral-600 line-clamp-3 dark:text-neutral-300">
        {task.description}
      </p>
      <p className="text-xs text-end text-gray-400 mt-1">
        Created: {new Date(task.createdAt).toLocaleString()}
      </p>
    </div>
  )
}
export const TaskItemMemo = memo(TaskItem, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps)
})

export default TaskItem
