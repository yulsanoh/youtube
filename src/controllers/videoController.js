export const handleHome = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const handleVideoWatch = (req, res) => {
  res.send("video watch");
};
