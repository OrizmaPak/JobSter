const express = require('express')

const app = express();

app.use(json())

app.use('/', (req, res)>{
    res.send('oya jumole ya jo looorrr baby wa joo lor')
})

const port = 3000

const start =async()=>{
    try {
        app.listen(port, ()=>{
            console.log(`listening at port ${port}...`)
        })
    } catch (error) {
        console.log(err)
    }
}