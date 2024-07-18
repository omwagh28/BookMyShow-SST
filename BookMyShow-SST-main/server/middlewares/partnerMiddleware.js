const partnerMiddleware = (req, res, next) => {
  if (req.user.role !== "partner") {
    return res.send({
      success: false,
      message: "You are not authorized to access this resource",
    });
  }
  next();
};
