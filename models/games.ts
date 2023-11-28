export interface Games {
  id: number
  title: string
  platform: string
}

export interface GamesData {
  title: string
  platform: string
}

export interface IGDBGames {
  id: number
  age_ratings?: number[]
  artworks?: number[]
  category: number
  cover?: number
  created_at: number
  external_games?: number[]
  first_release_date?: number
  game_modes?: number[]
  genres?: number[]
  name: string
  platforms?: number[]
  release_dates?: number[]
  screenshots?: number[]
  similar_games?: number[]
  slug: string
  summary?: string
  tags?: number[]
  updated_at: number
  url: string
  version_parent?: number
  version_title?: string
  checksum: string
  themes?: number[]
  websites?: number[]
  language_supports?: number[]
  alternative_names?: number[]
  collection?: number
  follows?: number
  franchises?: number[]
  involved_companies?: number[]
  keywords?: number[]
  multiplayer_modes?: number[]
  player_perspectives?: number[]
  videos?: number[]
  ports?: number[]
  collections?: number[]
  hypes?: number
  status?: number
}
