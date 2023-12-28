const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler((req, res) => {
  res.status(200).json({
    message: "get goal",
  });
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({
    message: "set goal",
  });
});

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `update goal with id ${req.params.id}`,
  });
});

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `delete goal with id ${req.params.id}`,
  });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
