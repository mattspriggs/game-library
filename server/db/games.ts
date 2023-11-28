import db from './connection'
import { Games, GamesData } from '../../models/games'

export async function getAllGames(): Promise<Games[]> {
  const games = await db('games').select()
  return games
}

export async function getGameById(gamesId: number): Promise<Games> {
  const game = await db('games').where('id', gamesId).select('*').first()
  return game
}

export async function addGame(newGame: GamesData): Promise<Games> {
  const [game] = await db('games')
    .insert({ ...newGame })
    .returning('*')
  return game
}

export async function deleteGame(id: number): Promise<void> {
  await db('games').delete().where('id', id)
  return
}

export async function updateGame(
  editedGame: GamesData,
  id: number
): Promise<void> {
  await db('games')
    .update({ ...editedGame })
    .where('id', id)
    .returning(['id', 'title', 'platform'])
  return
}
