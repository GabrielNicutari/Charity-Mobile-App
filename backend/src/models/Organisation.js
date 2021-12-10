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
  motto: {
    type: String,
    required: true
  },
  keywords: { type: [String], validate: (arr) => Array.isArray(arr) && arr.length > 0 },
  monthlyGoal: {
    type: Number,
    required: true
  },
  currentAmount: Number,
  overview: {
    type: String,
    required: true
  },
  history: [{ event: String }],
  achievements: [{ achievement: String }],
  gallery: [{ picture: String }]
});

module.exports = mongoose.model('Organisation', organisationSchema);