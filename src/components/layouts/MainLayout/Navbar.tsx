import { useTheme } from '@/hooks/useTheme'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="fixed top-0 left-0 right-0 z-navbar py-4 px-6 shadow-sm flex justify-between items-center bg-white dark:bg-gray-900">
      <div className="flex items-center">
        <img src="./task.png" className="size-10" />
        <h4 className="dark:text-white">Task Manager</h4>
      </div>
      <button
        onClick={toggleTheme}
        className="btn-outlined rounded-full px-3 py-2 w-24"
      >
        {theme === 'dark' ? '☀️ Day' : '🌙 Night'}
      </button>
    </div>
  )
}

export default Navbar
