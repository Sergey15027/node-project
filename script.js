const expres = require('express')
const app = expres()

app.get('' , (req,res) =>{
    return res.json('hello')
})

app.listen(1521, () => {
    console.log('Server start on 1521 port')
})