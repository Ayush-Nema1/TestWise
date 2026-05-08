// controllers/testController.js

const MasterTest = require("../model/MasterTest");

// SEARCH TESTS

const searchTests = async (req, res) => {
  try {

    const q = req.query.q;

    // EMPTY SEARCH
    if (!q) {
      return res.status(400).json({
        success: false,
        message: "Search query is required",
      });
    }

    // SEARCH
    const tests = await MasterTest.find(
      {
        $text: {
          $search: q,
        },
      },
      {
        score: {
          $meta: "textScore",
        },
      }
    )
      .sort({
        score: {
          $meta: "textScore",
        },
      })
      .limit(10);

    res.status(200).json({
      success: true,
      count: tests.length,
      data: tests,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET ALL TESTS

const getAllTests = async (req, res) => {
  try {

    const tests = await MasterTest.find()
      .sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: tests.length,
      data: tests,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET SINGLE TEST BY SLUG

const getTestBySlug = async (req, res) => {
  try {

    const slug = req.params.slug;

    const test = await MasterTest.findOne({
      slug: slug,
    });

    if (!test) {
      return res.status(404).json({
        success: false,
        message: "Test not found",
      });
    }

    res.status(200).json({
      success: true,
      data: test,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  searchTests,
  getAllTests,
  getTestBySlug,
};