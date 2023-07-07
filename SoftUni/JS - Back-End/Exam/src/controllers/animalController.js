const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleWare');
const animalManager = require('../managers/animalManager');
const errorHelper = require('../utils/errorHelper');

router.get('/create', isAuth, (req, res) => {
	res.render('animals/create');
});
router.post('/create', isAuth, async (req, res) => {
	const { name, years, kind, image, need, location, description } = req.body;

	try {
		const owner = req.user._id;

		await animalManager.create({
			name,
			years: Number(years),
			kind,
			image,
			need,
			location,
			description,
			owner,
		});

		res.redirect('/animals/dashboard');
	} catch (err) {
		const error = errorHelper.getOne(err);
		res.render('animals/create', { error });
	}
});

router.get('/dashboard', async (req, res) => {
	try {
		const animals = await animalManager.getAll();

		res.render('animals/dashboard', { animals });
	} catch (err) {
		const error = errorHelper.getOne(err);
		res.render('/', { error });
	}
});

router.get('/details/:id', async (req, res) => {
	const id = req.params.id;

	try {
		const user = req.user?._id;

		const animal = await animalManager.getById(id);

		const isOwner = animalManager.isOwner(user, animal.owner);
		const isDonator = animalManager.isDonator(user, animal.donations);

		res.render('animals/details', { animal, isOwner, isDonator });
	} catch (err) {
		res.redirect('/');
	}
});

router.get('/donate/:id', isAuth, async (req, res) => {
	const id = req.params.id;
	try {
		const user = req.user._id;

		const owner = await animalManager.getById(id).owner;
		const isOwner = animalManager.isOwner(user, owner);

		if (isOwner) {
			throw new Error('Owner cannot donate');
		}

		await animalManager.donate(id, user);

		res.redirect(`/animals/details/${id}`);
	} catch (err) {
		res.redirect(`/animals/details/${id}`);
	}
});

router.get('/del/:id', isAuth, async (req, res) => {
	const id = req.params.id;

	try {
		const user = req.user._id;

		const owner = await animalManager.getById(id);
		console.log(owner);
		const isOwner = animalManager.isOwner(user, owner);

		if (!isOwner) {
			throw new Error('Only owner can delete');
		}

		await animalManager.del(id);

		res.redirect('/animals/dashboard');
	} catch (err) {
		res.redirect('/');
	}
});

router.get('/edit/:id', isAuth, async (req, res) => {
	const id = req.params.id;

	try {
		const user = req.user._id;

		const animal = await animalManager.getById(id);
		const isOwner = animalManager.isOwner(user, animal.owner);
		if (!isOwner) {
			throw new Error('Only owner can edit');
		}

		res.render('animals/edit', { animal });
	} catch (err) {
		res.redirect('/');
	}
});

router.post('/edit/:id', isAuth, async (req, res) => {
	const id = req.params.id;

	const { name, years, kind, image, need, location, description } = req.body;

	try {
		const user = req.user._id;

		const animal = await animalManager.getById(id);
		const isOwner = animalManager.isOwner(user, animal.owner);
		if (!isOwner) {
			throw new Error('Only owner can edit');
		}
		if (Number(years) < 1 || Number(years) > 100) {
			throw new Error('Years should be between 1 and 100');
		}

		await animalManager.edit(id, {
			name,
			years: Number(years),
			kind,
			image,
			need,
			location,
			description,
		});

		res.redirect(`/animals/details/${id}`);
	} catch (err) {
		const error = errorHelper.getOne(err);
		if (error == 'Only owner can edit') {
			res.redirect(`/`);
		} else {
			res.render('animals/edit', { error });
		}
	}
});

router.get('/search', async (req, res) => {
	try {
		const name = req.query?.name;

		const animals = await animalManager.search(name);

		res.render('animals/search', { animals });
	} catch (err) {
		const error = errorHelper.getOne(err);
		res.render('animals/search', { error });
	}
});

module.exports = router;
