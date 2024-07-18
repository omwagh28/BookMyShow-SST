const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.send({
      success: false,
      message: "You are not authorized to access this resource",
    });
  }
  next();
};
