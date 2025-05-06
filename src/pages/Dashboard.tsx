import FilterOptions from '@/components/FilterOptions'
import TaskFormWrapper from '@/components/TaskFormWrapper'
import { TasksList } from '@/components/TasksList'

const Dashboard = () => {
  return (
    <div>
      <div className="pt-2 flex justify-between items-center">
        <FilterOptions />
        <TaskFormWrapper />
      </div>
      <TasksList />
    </div>
  )
}

export default Dashboard
