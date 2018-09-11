const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`PARTY ON ${port}`)
})

app.get('/', (req, res) => {
    res.send('IT WORKS AND IDK WHY!')
})