const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema({
	name: String,
});

const Technician = mongoose.model('Technician', technicianSchema);

async function addTechnicians(technicianNames) {
	try {
		// Replace 'your_database_url' with your actual MongoDB connection URL
		await mongoose.connect(
			'mongodb+srv://simohassane2002:EjkIwcZVhPoHCjcz@nasacluster.0hhcpvj.mongodb.net/',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);

		for (const name of technicianNames) {
			const technician = new Technician({ name });
			await technician.save();
			console.log(`Technician ${name} added to the database.`);
		}

		await mongoose.disconnect();
		console.log('Disconnected from MongoDB.');
	} catch (error) {
		console.error('Error:', error.message);
		throw error; // Re-throw the error to be caught by the controller
	}
}

module.exports = {
	addTechnicians,
};
