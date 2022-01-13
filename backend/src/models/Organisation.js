const mongoose = require('mongoose');

const { Schema } = mongoose;

const organisationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bannerImage: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  motto: {
    type: String,
    required: true
  },
  keywords: { type: [String], validate: (arr) => Array.isArray(arr) && arr.length > 0 },
  totalProgress: Number,
  monthlyGoal: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  facts: { type: [String] },
  goals: [{ goal: String, description: String }],
  gallery: [{ picture: String }]
});

module.exports = mongoose.model('Organisation', organisationSchema);
