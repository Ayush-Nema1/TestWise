const mongoose = require("mongoose");

const labTestPricingSchema = new mongoose.Schema(
  {
    // LAB REFERENCE

    lab_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lab",
      required: true,
      index: true,
    },

    // TEST REFERENCE

    test_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TestMaster",
      required: true,
      index: true,
    },

    // PRICING

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    discounted_price: {
      type: Number,
      default: null,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// PREVENT DUPLICATE TEST FOR SAME LAB
labTestPricingSchema.index(
  {
    lab_id: 1,
    test_id: 1,
  },
  {
    unique: true,
  }
);

// FAST TEST PRICE SEARCH
labTestPricingSchema.index({
  test_id: 1,
  price: 1,
});

// FAST LAB TEST FETCH
labTestPricingSchema.index({
  lab_id: 1,
});

module.exports = mongoose.model(
  "LabTestPricing",
  labTestPricingSchema
);
