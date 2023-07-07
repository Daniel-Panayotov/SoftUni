const jwt = require('../lib/utils');
const { secret, cookie } = require('../config/global');

async function auth(req, res, next) {
	const token = req.cookies[cookie];

	if (token) {
		try {
			const user = await jwt.verify(token, secret);

			req.user = user;
			res.locals.user = user;
			res.locals.isAuth = true;
		} catch (err) {
			res.clearCookie(cookie);

			return res.redirect('/users/login');
		}
	}

	next();
}

function isAuth(req, res, next) {
	const token = req.cookies[cookie];

	if (!token) {
		return res.redirect('/users/login');
	}

	next();
}

function isLogged(req, res, next) {
	const token = req.cookies[cookie];

	if (token) {
		return res.redirect('/');
	}
	next();
}

const authMiddlewares = { auth, isAuth, isLogged };

module.exports = authMiddlewares;
