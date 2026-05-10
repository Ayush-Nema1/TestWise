

const express = require("express");

const router = express.Router();

const {
  searchTests,
  getAllTests,
  getTestBySlug,
} = require("../controllers/test.controller");

// SEARCH TESTS
router.get("/search", searchTests);

// GET ALL TESTS
router.get("/", getAllTests);

// GET SINGLE TEST BY SLUG
router.get("/:slug", getTestBySlug);

module.exports = router;