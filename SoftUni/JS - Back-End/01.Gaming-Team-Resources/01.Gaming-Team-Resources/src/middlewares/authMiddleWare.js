const jwt = require('../lib/utils');
const globals = require('../config/global');

async function auth(req, res, next) {
	const token = req.cookies['token'];

	if (token) {
		try {
			const user = await jwt.verify(token, globals.secret);

			req.user = user;
			res.locals.user = user;
			res.locals.isAuth = true;
		} catch (err) {
			res.clearCookie('token');

			return res.redirect('/users/login');
		}
	}

	next();
}

function isLogged(req, res, next) {
	const token = req.cookies['token'];

	if (!token) {
		return res.redirect('/users/login');
	}

	next();
}

const authMiddlewares = { auth, isLogged };

module.exports = authMiddlewares;
