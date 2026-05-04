import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export function Layout() {
  return (
    <>
      <div className="bg-stars" />
      <div className="app">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}
