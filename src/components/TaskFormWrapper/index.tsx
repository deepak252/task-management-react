import ModalWrapper from '@/components/ModalWrapper'
import TaskForm from './TaskForm'
import { useState } from 'react'

const TaskFormWrapper = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleTaskForm = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className="btn-filled" onClick={toggleTaskForm}>
        Create Task
      </button>
      {isOpen && (
        <ModalWrapper onClose={toggleTaskForm} isOpen closeOnEsc showCloseIcon>
          <div className="modal-container h-96">
            <TaskForm onClose={toggleTaskForm} />
          </div>
        </ModalWrapper>
      )}
    </>
  )
}

export default TaskFormWrapper
