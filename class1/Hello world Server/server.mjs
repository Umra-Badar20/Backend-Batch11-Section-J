console.log("Hello world server");

import express from 'express'
const app = express()
const port = 3000
//192.168.228.243:3000
app.get('/', (req, res) => {
    console.log("Requesting IP: ", req.ip);
    
  res.send('Hello World!'+ new Date().toLocaleString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})