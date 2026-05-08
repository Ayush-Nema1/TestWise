const mongoose = require("mongoose");

const labSchema = new mongoose.Schema(
  {
    // BASIC INFO

    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    owner_name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    lab_type: {
      type: String,
      enum: [
        "Diagnostic Lab",
        "Pathology Lab",
        "Radiology Center",
        "Multi Specialty Lab",
      ],
      required: true,
    },

    description: {
      type: String,
      trim: true,
    },

    // ADDRESS

    address_line_1: {
      type: String,
      required: true,
      trim: true,
    },

    address_line_2: {
      type: String,
      trim: true,
    },

    landmark: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      index: true,
    },

    state: {
      type: String,
      required: true,
      index: true,
    },

    pincode: {
      type: String,
      required: true,
      index: true,
    },

    google_maps_link: {
      type: String,
      trim: true,
    },

    // LOCATION FOR NEARBY SEARCH

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },

      coordinates: {
        type: [Number], // [lng, lat]
        default: [0, 0],
      },
    },

    // SERVICES

    home_collection: {
      type: Boolean,
      default: false,
    },

    home_collection_fee: {
      type: Number,
      default: 0,
    },

    // OPERATING HOURS

    timings: {
      monday: {
        open: String,
        close: String,
        closed: Boolean,
      },

      tuesday: {
        open: String,
        close: String,
        closed: Boolean,
      },

      wednesday: {
        open: String,
        close: String,
        closed: Boolean,
      },

      thursday: {
        open: String,
        close: String,
        closed: Boolean,
      },

      friday: {
        open: String,
        close: String,
        closed: Boolean,
      },

      saturday: {
        open: String,
        close: String,
        closed: Boolean,
      },

      sunday: {
        open: String,
        close: String,
        closed: Boolean,
      },
    },

    // DOCUMENTS

    documents: {
      nabl_certificate: String,

      gst_certificate: String,

      pan_card: String,

      drug_license: String,

      lab_registration_certificate: String,

      owner_id_proof: String,
    },

    // STATUS

    verification_status: {
      type: String,
      enum: [
        "pending",
        "under_review",
        "approved",
        "rejected",
      ],
      default: "pending",
    },

    is_verified: {
      type: Boolean,
      default: false,
    },

    is_active: {
      type: Boolean,
      default: true,
    },

    Performance_score: {
      type: Number,
      default: 10,
  },    
    },
  {
    timestamps: true,
  }
);

// GEO SEARCH INDEX
labSchema.index({
  location: "2dsphere",
});

// SEARCH INDEX
labSchema.index({
  name: "text",
  city: "text",
});

module.exports = mongoose.model("Lab", labSchema);