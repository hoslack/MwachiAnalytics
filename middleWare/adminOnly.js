module.exports = (req, res, next) => {
  if (req.user.email !== 'hos.amondi@gmail.com') {
    return res.status(401).send({ error: 'Only logged-in admin can access this route' });
  }
  next();
};
