import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <div className="mt-[78px] min-h-screen max-w-[1200px] mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
