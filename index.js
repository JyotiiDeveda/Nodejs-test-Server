const express =  require('express')

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/health-checkup', (req, res) => {
	res.status(200).json({ message: "I am a nodejs Server"})
})


app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
})

