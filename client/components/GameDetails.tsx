import { ChangeEvent, useState, FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  deleteGameSelected,
  getGameById,
  updateSelectedGame,
} from '../apis/games'
import { Games } from '../../models/games'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export default function GameDetails() {
  const { gameId } = useParams()

  const {
    data: gameDetails,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['game', gameId],
    queryFn: () => getGameById(gameId as string),
  })

  const queryClient = useQueryClient()

  const [editing, setEditing] = useState(false)

  const initialFormData = {
    id: Number(gameId),
    title: gameDetails?.title,
    platform: gameDetails?.platform,
  }

  const [form, setForm] = useState<Games>(initialFormData as Games)

  const navigate = useNavigate()

  const editGameMutation = useMutation(updateSelectedGame, {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['game'] }),
  })

  const deleteGame = useMutation(deleteGameSelected, {
    onSuccess: () => navigate('/'),
  })

  if (isError) {
    return <p>There was an error getting this game...</p>
  }

  if (isLoading) {
    return <p>Loading your game...</p>
  }

  const handleDelete = () => {
    const deleteId = Number(gameId)
    deleteGame.mutate(deleteId)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  const handleSaveEdits = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    editGameMutation.mutate(form)
    setEditing(false)
  }
  const handleCancelEdits = () => {
    setEditing(false)
  }

  const handleEdit = () => {
    setEditing(true)
    setForm(initialFormData as Games)
  }
  return (
    <>
      <h2>Game Details:</h2>
      {editing ? (
        <div>
          <form
            onSubmit={handleSaveEdits}
            aria-label="Form to edit the game title and platform"
          >
            <p>
              <label htmlFor="title">Title:</label>
              <input
                aria-label="Edit game title"
                type="text"
                id="title"
                name="title"
                placeholder={gameDetails.title}
                value={form.title}
                onChange={handleChange}
              />
            </p>
            <p>
              <label htmlFor="platform">Which platform?</label>
              <br />
              <br />
              <select
                name="platform"
                id="platform"
                onChange={handleChange}
                value={form.platform}
                aria-label="Game platform selection"
                required
              >
                <option value="">-- Platform --</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
                <option value="Playstation 5">Playstation 5</option>
                <option value="Xbox Series X">Xbox Series X</option>
                <option value="PC">PC</option>
                <option value="PC - Steam Deck - Playable">
                  PC - Deck - Playable
                </option>
                <option value="PC - Steam Deck - Verified">
                  PC - Deck - Verified
                </option>
              </select>
            </p>
            <button type="submit">Save Edits</button>
            <button onClick={handleCancelEdits}>Cancel Edits</button>
          </form>
        </div>
      ) : (
        <section>
          <p>Title: {gameDetails.title}</p>
          <p>Platform: {gameDetails.platform}</p>
          <br />
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </section>
      )}
    </>
  )
}
