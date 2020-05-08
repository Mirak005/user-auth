const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const config = require("config");

const User = require("../models/User");
const secretOrKey = config.get("secretOrKey");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const persone = await User.findById(jwt_payload.id).select("-password");
      persone ? done(null, persone) : done(null, false);
    } catch (error) {
      console.log(error);
    }
  })
);

module.exports = isAuth = () => {
  return passport.authenticate("jwt", { session: false });
};
