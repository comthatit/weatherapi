const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
  res.send('city weather infomation')
})
app.get('/:city' , (req, res) => {
  const p = req.params
  if(p.city == 'seoul'){
    res.json({'temperature' : '34', 'humidity' : '50'})
  }else if(p.city == 'busan'){
    res.json({'temperature' : '36', 'humidity' : '70'})
  }else if(p.city == 'jeju'){
    res.json({'temperature' : '32', 'humidity' : '40'})
  }else{
    res.json({'temperature' : 'x', 'humidity' : 'x'})
  }
})

app.listen(3000)