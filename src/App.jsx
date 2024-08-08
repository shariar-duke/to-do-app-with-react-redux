import Navbar from "./components/Navbar"
import Taskboard from "./components/Taskboard"
export default function App() {
  return (
    <div className="bg-[#F0FFF0]">
      <Navbar/>
      <div className="min-h-[90vh] flex justify-center items-center">
        <Taskboard/>
      </div>
    </div>
  )
}