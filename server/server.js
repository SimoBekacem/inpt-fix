const express = require('express');
const app = express();
const cors = require('cors');
const techniciansRouter = require('./technicains.router'); // Adjust the path based on your project structure

app.use(
	cors({
		origin: 'http://localhost:3001',
	})
);
// Middleware to parse JSON in the request body
app.use(express.json());

// Use the technicians router
app.use('/api', techniciansRouter); // Adjust the route path as needed

// Set up other middleware and routes as needed

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
