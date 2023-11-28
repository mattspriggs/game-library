import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import GamesList from './components/GamesList'
import GameDetails from './components/GameDetails'
import GameForm from './components/GamesForm'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<GamesList />} />
    <Route path=":gameId" element={<GameDetails />} />
    <Route path="add" element={<GameForm />} />
  </Route>
)
