const router = require('express').Router();

const { createAccessory } = require('../managers/accessoryManager');

router.post('/create', async (req, res) => {
	const { name, description, imageUrl } = req.body;

	await createAccessory(name, description, imageUrl);

	res.redirect('/');
});

router.get('/create', (req, res) => {
	res.render('accessory/create');
});

module.exports = router;
