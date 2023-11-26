import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addGame } from '../apis/games'
import { GamesData } from '../../models/games'

const initialFormData = {
  title: '',
  platform: '',
}

export default function GameForm() {
  const [form, setForm] = useState<GamesData>(initialFormData)

  const queryClient = useQueryClient()

  const gameAddMutation = useMutation({
    mutationFn: addGame,
    onSuccess: (newGame) => {
      console.log(newGame)
      queryClient.invalidateQueries({ queryKey: ['games'] })
    },
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    gameAddMutation.mutate(form)
    setForm(initialFormData)
  }

  if (gameAddMutation.isLoading) {
    return <p>Adding your game...</p>
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Form to add a game to your collection"
    >
      <p>
        <label htmlFor="title">Game Title:</label>
        <br />
        <input
          // type="text"
          id="title"
          onChange={handleChange}
          value={form.title}
          name="title"
          aria-label="Game title input field"
        />
      </p>
      <p>
        <label htmlFor="platform">Which platform?</label>
        <br />
        <input
          // type="text"
          id="platform"
          onChange={handleChange}
          value={form.platform}
          name="platform"
          aria-label="Game platform field"
        />
      </p>
      <p>
        <select name="platform" id="platform">
          <option value="">Please choose a platform</option>
          <option value="switch">Nintendo Switch</option>
          <option value="ps5">Playstation 5</option>
          <option value="xsx">Xbox Series X</option>
          <option value="pc">PC</option>
        </select>
      </p>
      <button>Add Game!</button>
    </form>
  )
}
