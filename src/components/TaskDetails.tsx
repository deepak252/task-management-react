import ModalWrapper from '@/components/ModalWrapper'
import { Task } from '@/types/task.types'
import classNames from 'classnames'

const TaskDetails = ({
  task,
  onClose,
}: {
  task: Task
  onClose: () => void
}) => {
  return (
    <>
      {task && (
        <ModalWrapper onClose={onClose} isOpen closeOnEsc showCloseIcon>
          <div className="modal-container h-96 p-4">
            <div className="overflow-y-scroll custom-scrollbar h-full">
              <h5>{task.title}</h5>
              <p className="text-neutral-600">{task.description}</p>
            </div>
            <div className="flex justify-end gap-2">
              <p
                className={classNames(
                  'text-xs text-end text-blue-500 font-bold',
                  {
                    'text-green': task.status === 'completed',
                  }
                )}
              >
                {task.status}
              </p>
              <p className="text-xs text-end text-gray-400">
                Created: {new Date(task.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  )
}

export default TaskDetails
