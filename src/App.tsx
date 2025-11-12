
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <main className='w-full h-full min-h-screen flex bg-gradient-to-br from-gray-950 via-purple-950 to-black'>    <Sidebar />
        <div className='flex-1 overflow-auto bg-gradient-to-b from-purple-900/20 to-transparent'>
        <Outlet />
      </div>
   </main>
  )
}

export default App
