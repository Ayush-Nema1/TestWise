const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    order_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },

    // USER

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // LAB

    lab_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lab",
      required: true,
      index: true,
    },

    // TEST

    test_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MasterTest",
      required: true,
      index: true,
    },

    // LAB TEST PRICE ENTRY

    lab_test_pricing_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LabTestPricing",
      required: true,
    },

    // SNAPSHOT DATA

    test_name: {
      type: String,
      required: true,
      trim: true,
    },

    lab_name: {
      type: String,
      required: true,
      trim: true,
    },

    booking_price: {
      type: Number,
      required: true,
      min: 0,
    },

    // PATIENT DETAILS

    patient_name: {
      type: String,
      required: true,
      trim: true,
    },

    patient_phone: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    pincode: {
      type: String,
      required: true,
      trim: true,
    },

    // SLOT

    sample_collection_date: {
      type: Date,
      required: true,
    },

    sample_collection_time: {
      type: String,
      required: true,
    },

    // WHATSAPP ACCEPT FLOW

    accept_token: {
      type: String,
      unique: true,
      sparse: true,
    },

    whatsapp_redirect_url: {
      type: String,
    },

    // COMMISSION

    commission_amount: {
      type: Number,
      default: 0,
      min: 0,
    },

    commission_locked: {
      type: Boolean,
      default: false,
    },

    commission_status: {
      type: String,
      enum: [
        "pending",
        "paid",
        "waived",
      ],
      default: "pending",
      index: true,
    },

    commission_paid_at: {
      type: Date,
    },

    // ACCEPT TRACKING

    accepted_at: {
      type: Date,
    },

    // ORDER STATUS

    order_status: {
      type: String,
      enum: [
        "initiated",
        "sent_to_lab",
        "accepted",
        "completed",
        "cancelled",
      ],
      default: "initiated",
      index: true,
    },

    // NOTES

    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// FAST USER ORDERS

orderSchema.index({
  user_id: 1,
  createdAt: -1,
});

// FAST LAB ORDERS

orderSchema.index({
  lab_id: 1,
  createdAt: -1,
});

// FAST WEEKLY COMMISSION TRACKING

orderSchema.index({
  lab_id: 1,
  commission_status: 1,
  accepted_at: -1,
});

module.exports = mongoose.model("Order", orderSchema);