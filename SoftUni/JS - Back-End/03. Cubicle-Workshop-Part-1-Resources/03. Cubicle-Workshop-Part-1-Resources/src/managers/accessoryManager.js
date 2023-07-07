const Accessory = require('../models/Accessory');

async function createAccessory(name, description, imageUrl) {
	try {
		const createdAccessory = await Accessory.create({ name, description, imageUrl });
		return createdAccessory;
	} catch (err) {
		console.log(err);
	}
}

async function getAllNotAttachedAccessories(cubeId) {
	const accessories = await Accessory.find({ cubes: { $ne: cubeId } }).lean();

	return accessories;
}

async function getAllAccessories() {
	let accessories = await Accessory.find().lean();

	return accessories;
}

async function getAllCubeAccessories(cubeId) {
	const accessories = await Accessory.find({ cubes: cubeId }).lean();

	return accessories;
}

module.exports = {
	createAccessory,
	getAllAccessories,
	getAllCubeAccessories,
	getAllNotAttachedAccessories,
};
