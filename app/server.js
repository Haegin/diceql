'use strict'

const http = require('http')
// const https = require('https')

const app = require('./app')

const PORT = process.env.PORT || 3333

http.createServer(app.callback()).listen(PORT, err => {
  if (err) return console.error(err)
  console.log(`🌎  server running at http://localhost:${PORT}`)
})

// For when we need https:
// This needs proper certificates

// https.createServer(app.callback()).listen(PORT + 1, err => {
//   if (err) return console.error(err)
//   console.log(`🌎  server running at https://localhost:${PORT + 1}`)
// })
