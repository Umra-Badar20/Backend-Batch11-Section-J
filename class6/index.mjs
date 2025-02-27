import express from "express"
const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
let users =[]
app.post('/user',(req,res)=>{
    users.push({...req.body, id: Date.now().toString(36)})
    res.send({message:"User added successfully"})  
})
app.get('/user',(req,res)=>{
    res.send(users)
})
app.delete('/user/:id',(req,res)=>{
    const { id } = req.params
    // const index = users.filter((user)=> user.id !== id)  
    const index = users.findIndex((user)=> user.id== id)
    users.splice(index,1)
    res.send({message:"User deleted successfully"})  
})
app.put('/user/:id',(req,res)=>{
    const { id } = req.params
    const index = users.findIndex((user)=> user.id== id)
    users.splice(index,1, {...req.body, id})
    res.send({message:"User updated successfully"})  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})