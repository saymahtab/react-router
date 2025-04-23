import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      nav links
      <Outlet />
    </div>
  )
}

export default DashboardLayout
