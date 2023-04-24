import { Create } from "./pages/Create"
import { Edit } from "./pages/Edit"
import { Index } from "./pages/Index"
import { Show } from "./pages/Show"
import {
  Routes, Route
} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
  )
}

export default App
