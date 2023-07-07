function addCat(cats, cat) {
	const isEmpty = Object.values(cat).find(x => x == '') == '';
	if (isEmpty) {
		return;
	}
	cats.push(cat);
}

function addBreed(dataBase, formData) {
	const breed = formData.breed;
	if (breed.length < 1) {
		return;
	}
	dataBase.push(breed);
}

function editCat(cats, cat, index) {
	const isEmpty = Object.values(cat).find(x => x == '') == '';
	if (isEmpty) {
		return;
	}
	cats[index] = cat;
}

function shelterCat(cats, index) {
	cats.splice(index, 1);
}

module.exports = { addCat, addBreed, editCat, shelterCat };
