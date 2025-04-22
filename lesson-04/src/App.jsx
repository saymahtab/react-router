import { Route, Routes } from "react-router-dom"
import Main from "./routes/Main"
import { useLocation } from "react-router-dom";

const App = () => {

  const location = useLocation();
  console.log(location)
  return (
    <Routes>
      <Route path="*" element={<Main />} />
    </Routes>
  )
}

export default App
