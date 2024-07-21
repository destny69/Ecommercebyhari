const User = require('../models/user.model');

function getSignup(req, res) {
  res.render('customer/auth/signup');
}

async function signup(req, res, next) {
  try {
    console.log('hello');
    const user = new User(
      req.body.email,
      req.body.password,
      req.body.fullname,
      req.body.street,
      req.body.postal,
      req.body.city
    );
    await user.signup();
    res.redirect('/login');
  } catch (err) {
    next(err); // Pass errors to the error handling middleware
  }
}

function getLogin(req, res) {
  res.render('customer/auth/login');
}

module.exports = {
  getSignup,
  getLogin,
  signup
};
