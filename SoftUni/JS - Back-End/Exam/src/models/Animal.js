const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
		minLength: [2, 'Name should be min 2 characters long'],
	},
	years: { type: Number, required: [true, 'Years are required'] },
	kind: {
		type: String,
		required: [true, 'Kind is required'],
		minLength: [3, 'Kind should be min 3 characters long'],
	},
	image: {
		type: String,
		required: [true, 'Image is required'],
		match: [/^https?:\/\/.+$/, 'Image should start with http(s)'],
	},
	need: {
		type: String,
		required: [true, 'Needs are required'],
		minLength: [3, 'Need should be min 3 characters long'],
		maxLength: [20, 'Need cant be more than 20 characters long'],
	},
	location: {
		type: String,
		required: [true, 'Location is required'],
		minLength: [5, 'Location should be min 5 characters long'],
		maxLength: [15, 'Location cant be more than 15 characters long'],
	},
	description: {
		type: String,
		required: [true, 'Description is required'],
		minLength: [5, 'Description should be min 5 characters long'],
		maxLength: [50, 'Description cant be more than 50 characters long'],
	},
	donations: [{ userID: { type: mongoose.Types.ObjectId } }],
	owner: { type: mongoose.Types.ObjectId, ref: 'users', require: [true, 'Owner is required'] },
});

const Animal = mongoose.model('animals', animalSchema);

module.exports = Animal;
