const express = require('express')
const app = express()
const port = 8800

app.get('/', (req, res) => {
	res.send('龍堂もものページへようこそ！')
})

app.listen(port, () => {
	console.log('app start')
})

