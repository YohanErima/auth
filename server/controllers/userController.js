const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const userRegister = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({ error: "Erreur le nom est requis" });
    }
    const alreadyUse = await User.findOne({ email });
    if (alreadyUse) {
      return res.json({
        error: "Erreur le mail est déjà utilisé dans la base",
      });
    }
    if (password.length < 8) {
      return res.json({
        error: "Le mot de passe doit faire au minium 8 caratères",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ error: "Email not found" });
    }

    // Utilisez bcrypt.compare pour vérifier le mot de passe
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.json({ error: "Incorrect password" });
    }

    // Ici, vous pouvez générer un token d'authentification, le stocker dans une session, etc.
    // ...

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};

module.exports = { userLogin, userRegister };
