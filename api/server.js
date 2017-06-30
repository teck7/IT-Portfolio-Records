const express = require('express')
const projectsRouter = require('./routes/projects')

// Create API Express server
const server = express()

// Add routes
server.use('/api', projectsRouter)
// enable all projects to be shown on
// localhost:port/api/projects

// Allocate http port number for server to start
const port = 7000
server.listen(port, () => {
  console.log(`API server is running on port ${port}`)
})
