const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controlers/goalControler");

const { protect } = require("../middleware/authMiddlware")

router.route('/').get(protect, getGoals).post(protect, setGoal)

router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)



module.exports = router;
