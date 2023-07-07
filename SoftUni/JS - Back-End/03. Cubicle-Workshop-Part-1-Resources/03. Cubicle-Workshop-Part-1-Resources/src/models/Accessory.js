const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
	name: { type: String, required: true, minLength: 5, match: /^[A-Za-z0-9 ]+$/ },
	imageUrl: { type: String, required: true, match: /^https?:\/\/.+$/ },
	description: { type: String, required: true, minLength: 20, match: /^[A-Za-z0-9 ]+$/ },
	cubes: { type: mongoose.Types.ObjectId, ref: 'cubes' },
});

const Accessory = mongoose.model('accessories', accessorySchema);

module.exports = Accessory;
