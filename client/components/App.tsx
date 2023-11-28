import { Link, Outlet, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/add')
  }
  return (
    <>
      <header className="header">
        <h1>
          <Link to={'/'} className="link">
            Video Game Collection
          </Link>
        </h1>
        <button onClick={handleClick}>Add a Game!</button>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
