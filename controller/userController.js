const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({
    status: 'success',
    results: user.length,
    data: {
      user,
    },
  });
});

exports.createUser = catchAsync((req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
});

exports.getUser = catchAsync((req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
});

exports.updateUser = catchAsync((req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
});

exports.deleteUser = catchAsync((req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
});
