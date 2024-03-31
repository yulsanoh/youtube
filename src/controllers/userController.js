// about root router
export const handleLogin = (req, res) => {
  res.render("login");
};

export const handleGetSignUp = (req, res) => {
  res.render("signup");
};

export const handleUserProfile = (req, res) => {
  res.send("user profile");
};
