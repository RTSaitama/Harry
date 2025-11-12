import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <main className="w-full h-screen flex flex-col sm:flex-row bg-linear-to-b from-gray-950 via-purple-950 to-black overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-full overflow-hidden bg-linear-to-b from-purple-900/20 to-transparent">
        <Outlet />
      </div>
    </main>
  )
}

export default App
