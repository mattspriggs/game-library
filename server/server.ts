import * as Path from 'node:path'
import gamesRoutes from './routes/routes'
import express from 'express'

const server = express()
server.use(express.json())

server.use('/api/v1/games', gamesRoutes)

server.get('/api/*', (req, res) => {
  res.sendStatus(404)
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
