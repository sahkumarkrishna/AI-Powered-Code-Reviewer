const express = require("express");
const aiController = require("../controllers/ai.controller");

const router = express.Router();

// Define POST route to get the review
router.post("/get-review", aiController.getReview);

module.exports = router;
