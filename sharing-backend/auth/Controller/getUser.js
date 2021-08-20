const getUser = (req, res) => {
  const user = req.user;

  if (user) {
    res.json({
      success: true,
      username: user.username,
      fullname: user.fullname,
      avatar: user.avatar,
    });
  } else {
    res.status(404).json({
      success: false,
      desc: "User Not Found",
    });
  }
};

export default getUser;
