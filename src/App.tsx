import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Kanban from "./pages/Kanban"

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/kanban" element={<Kanban />}/>
    </Routes>
   </Router>
  )
}

export default App
