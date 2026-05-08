const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      sparse: true,
      lowercase: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    addresses: [
      {
        label: {
          type: String,
          enum: ["home", "work", "other"],
          default: "home",
        },

        full_address: String,

        landmark: String,

        city: String,

        state: String,

        pincode: String,

        is_default: {
          type: Boolean,
          default: false,
        },

        location: {
          type: {
            type: String,
            enum: ["Point"],
            default: "Point",
          },

          coordinates: {
            type: [Number],
            default: [0, 0],
          },
        },
      },
    ],

    is_verified: {
      type: Boolean,
      default: false,
    },

    is_blocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);