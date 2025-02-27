import express from "express";
import cors from 'cors'
  

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

let users =[]

app.get('/', (req, res) => {
    console.log("hihihih")    
  res.send('Hello World!')
})

app.get('/users',(req,res)=>{
  res.send(users)
})

app.post('/adduser',(req,res)=>{
   console.log(req.body);
   users.push({...req.body,id:users.length +1})
   res.send({mss:"user added succesfull"})
   


})

app.delete('/user/:id',(req,res)=>{
    const {id}= req.params.id
   const index = users.findIndex(v=>v.id ===Number(id))
   users.splice(index,1)
    res.send({mss:"user deleted"})

 })

 app.put('/user/:id',(req,res)=>{
  const {id}= req.params.id
  const index = users.findIndex(v=>v.id === Number(id))
  
  
  users.splice(index,1,{...req.body,id:parseInt(req.params.id)})
  res.send({mss:"user edited"})
 })

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
