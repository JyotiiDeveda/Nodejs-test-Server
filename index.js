const express =  require('express')

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/health-checkup', (req, res) => {
	res.status(200).send(`<h1> This is application health checkup endpoint </h1>`)
})


app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
})

