const router = require("express").Router();
const User = require("../models/User");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res) => {
  const newuser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newuser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json("Incorrect Email ");
    }

    const decrypted = cryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );
    originaldPassword = decrypted.toString(cryptoJS.enc.Utf8);

    if (originaldPassword !== req.body.password)
      return res.status(401).json("Incorrect Password ");

    const acessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, acessToken });
  } catch (err) {
    console.log("sssssssss");
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
