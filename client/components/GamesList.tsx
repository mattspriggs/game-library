import { Link } from 'react-router-dom'
import { getGames } from '../apis/games'
import { useQuery } from '@tanstack/react-query'
import GamesForm from './GamesForm'

export default function GamesList() {
  const {
    data: gamesList,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['games'], queryFn: getGames })
  if (isError) {
    return <div>There was an error while getting your games</div>
  }
  if (!gamesList || isLoading) {
    return <div>Loading your games...</div>
  }
  console.log(gamesList)
  return (
    <section className="main">
      <ul>
        {gamesList.map((game) => (
          <li key={game.id}>
            <Link to={`/${game.id}`} className="link">
              {game.title}
            </Link>{' '}
            on {game.platform}
          </li>
        ))}
      </ul>
      <h2>Add a game to your collection!</h2>
      <GamesForm />
    </section>
  )
}
