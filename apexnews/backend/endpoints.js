module.exports = (req, res) => {
  let endpoints = {
    all: "https://inshot.herokuapp.com/v1/all",
    national: "https://inshot.herokuapp.com/v1/national",
    business: "https://inshot.herokuapp.com/v1/business",
    sports: "https://inshot.herokuapp.com/v1/sports",
    world: "https://inshot.herokuapp.com/v1/world",
    politics: "https://inshot.herokuapp.com/v1/politics",
    technology: "https://inshot.herokuapp.com/v1/technology",
    startup: "https://inshot.herokuapp.com/v1/startup",
    entertainment: "https://inshot.herokuapp.com/v1/entertainment",
    science: "https://inshot.herokuapp.com/v1/science",
    automobile: "https://inshot.herokuapp.com/v1/automobile",
    miscellaneous: "https://inshot.herokuapp.com/v1/miscellaneous",
    hatke: "https://inshot.herokuapp.com/v1/hatke",
  };

  res.json(endpoints);
};
