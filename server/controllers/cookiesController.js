const cookiesController = {};

cookiesController.setCookie = (req, res, next) => {
  res.cookie('SSID', res.locals.userInfo.userId, {
    httpOnly: true,
    secure: true,
    maxAge: 2 * 60 * 60 * 1000 * 1000,
  });

  return next();
};

module.exports = cookiesController;
