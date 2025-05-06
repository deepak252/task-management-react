import { taskFilterOptions } from '@/constants/appConstants'
import Dropdown from './Dropdown'
import { useTasks } from '@/hooks/useTasks'
import { TaskFilterOption } from '@/types/task.types'

const FilterOptions = () => {
  const { filter, applyFilter } = useTasks()
  return (
    <div>
      <Dropdown
        options={taskFilterOptions}
        selectedOptions={[filter]}
        showMenuIcon
        onChange={([option]) => {
          if (!option) {
            return
          }
          applyFilter(option as TaskFilterOption)
        }}
      ></Dropdown>
    </div>
  )
}

export default FilterOptions
