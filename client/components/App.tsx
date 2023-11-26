import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header className="header">
        <h1>
          <Link to={'/'} className="link">
            Video Game Collection
          </Link>
        </h1>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
