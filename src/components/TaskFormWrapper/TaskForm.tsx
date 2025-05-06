import { useFormik } from 'formik'
import useFormikErrors from '@/hooks/useFormikErrors'
import { useTasks } from '@/hooks/useTasks'

export type TaskFormValues = {
  title: string
  description?: string
}

export type TaskFormError = {
  title?: string
  description?: string
}

const TaskForm = ({ onClose }: { onClose?: () => void }) => {
  const { addTask } = useTasks()

  const formik = useFormik<TaskFormValues>({
    initialValues: {
      title: '',
      description: '',
    },
    validate: (values) => {
      const errors: TaskFormError = {}
      if (!values.title?.trim()) {
        errors.title = 'Enter task title'
      }
      if (!values.description?.trim()) {
        errors.description = 'Enter task description'
      }
      return errors
    },
    onSubmit: (values) => {
      const taskAdded = addTask(values)
      if (taskAdded) {
        onClose?.()
      }
    },
  })
  const errors = useFormikErrors<TaskFormValues, TaskFormError>(formik)

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex-grow overflow-auto px-4 scrollbar-thin">
        <h5 className="mt-4">Create Task</h5>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Task title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="textfield"
          />
          {errors.title && (
            <p className="form-input-error mt-2">{errors.title}</p>
          )}
          <textarea
            name="description"
            placeholder="Task description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="textfield"
            rows={4}
          />
          {errors.description && (
            <p className="form-input-error mt-2">{errors.description}</p>
          )}
        </form>
      </div>
      <hr />
      <div className="flex justify-end p-4">
        <button
          type="submit"
          className="btn-filled"
          onClick={() => formik.handleSubmit()}
        >
          Create
        </button>
      </div>
    </div>
  )
}

export default TaskForm
