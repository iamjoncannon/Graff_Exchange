'use strict'

const { db  } = require('./server/db')
const app = require('./server')
const PORT = process.env.PORT || 3001

async function startServer(){

    
    app.listen(PORT, () => console.log(`serving on port ${PORT}`))
}

startServer()