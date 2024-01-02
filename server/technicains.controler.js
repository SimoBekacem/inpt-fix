const { addTechnicians } = require('./technicians.module');

async function postTechnicians(req, res) {
	try {
		const technicianNames = req.body.technicianNames;

		if (!technicianNames || !Array.isArray(technicianNames)) {
			return res.status(400).json({
				error: 'Invalid technicianNames provided in the request body.',
			});
		}

		await addTechnicians(technicianNames);

		return res
			.status(201)
			.json({ message: 'Technicians added successfully.' });
	} catch (error) {
		console.error('Error adding technicians:', error.message);
		return res.status(500).json({ error: 'Internal Server Error' });
	}
}

module.exports = {
	postTechnicians,
};
