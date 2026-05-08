const mongoose = require("mongoose");
const slugify = require("slugify");

const MasterTestSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },

  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  slug: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  category: {
    type: String,
    required: true,
  },

  mrp: {
    type: Number,
    required: true,
    min: 0,
  },

  default_rate: {
    type: Number,
    required: true,
    min: 0,
  },

  fasting_required: {
    type: Boolean,
    default: false,
  },

  fasting_hours: {
    type: Number,
    default: 0,
  },

  aliases: [
    {
      type: String,
      trim: true,
    },
  ],

  search_keywords: [
    {
      type: String,
      lowercase: true,
      trim: true,
    },
  ],

  is_package: {
    type: Boolean,
    default: false,
  },

  sample_type: {
    type: String,
    default: "Blood",
  },
});

// AUTO GENERATE SLUG
MasterTestSchema.pre("save", function (next) {

  if (!this.slug) {
    this.slug = slugify(this.name, {
      lower: true,
      strict: true,
    });
  }

  next();
});

// TEXT SEARCH INDEX
MasterTestSchema.index({
  name: "text",
  aliases: "text",
  search_keywords: "text",
});

module.exports = mongoose.model(
  "MasterTest",
  MasterTestSchema
);