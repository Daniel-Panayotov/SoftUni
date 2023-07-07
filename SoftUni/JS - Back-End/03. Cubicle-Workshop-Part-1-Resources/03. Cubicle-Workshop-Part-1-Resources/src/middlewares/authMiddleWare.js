const jwt = require('../lib/util');
const globals = require('../config/global');

async function auth(req, res, next) {
	const token = req.cookies['token'];

	if (token) {
		try {
			const user = await jwt.verify(token, globals.secret);

			req.user = user;
			res.locals.user = user;
			res.locals.isAuth = true;

			next();
		} catch (err) {
			res.clearCookie('token');

			return res.redirect('/users/login');
		}
	} else {
		next();
	}
}

function isAuthenticated(req, res, next) {
	if (!req.user) {
		return res.redirect('/users/login');
	}
	next();
}

const middlewares = { auth, isAuthenticated };

module.exports = middlewares;
