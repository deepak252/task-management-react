import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const MainLayout = () => {
  return (
    <div className="min-h-screen dark:bg-gray-950/95">
      <Navbar />
      <div className="pt-20 px-6 max-w-[1200px] mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
