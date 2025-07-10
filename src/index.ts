import express from 'express'
import * as process from "node:process";
const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

