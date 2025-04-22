import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SettingPage from './pages/settingPage'
import Dashboard from './pages/Dashboard'
import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout'
import ProductsList from './components/ProductsList'
import Product from './components/Product'
import Error from './components/Error'

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="setting" element={<SettingPage />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<div>Register</div>} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<div>Users</div>} />

        <Route path="products">
          <Route index element={<ProductsList />} />
          <Route path=":productId" element={<Product />} />
        </Route>

      </Route>
      <Route path=":lang?/catagories" element={<div>laguage</div>} />

      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
