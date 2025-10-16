"use strict";

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.get("/me", auth, userController.me);
router.put("/me", auth, userController.updateProfile);

module.exports = router;
