import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SettingPage from "./pages/settingPage"
import Dashboard from "./pages/Dashboard"
import DashboardLayout from "./layouts/DashboardLayout"
import Products from "./components/Products"
import ProductItem from "./components/ProductItem"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="setting" element={<SettingPage />} />
      <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products">
              <Route index element={<Products />} />
              {/* Dynamic & Optional Segments */}
              <Route path=":productID/edit?" element={<ProductItem />} />
          </Route>
      </Route>
    </Routes>
  )
}

export default App
