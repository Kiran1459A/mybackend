require('dotenv').config()
const express = require('express')
const app = express()
const PORT=process.env.PORT


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kiran',(req,res)=>{
    res.send("https://www.youtube.com/")
})

app.get('/login',(req,res)=>{
    res.send('<h1> Please login </h1>')

})
app.listen( PORT , () => {
  console.log(`Example app listening on port ${PORT}`)
})