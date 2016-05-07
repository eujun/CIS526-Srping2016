"use strict"

// This middleware requires the current user NOT be a Guest
// Guest status is determined by the username (all guests
// share the username Guest)
function noBan(req, res, next) {
  if(req.user.username != "Guest" && !req.user.ban) return next();
  else return res.redirect('/login', {message: "You must be signed in/not banned to perform the action", user: req.user});
}

module.exports = exports = noBan;
