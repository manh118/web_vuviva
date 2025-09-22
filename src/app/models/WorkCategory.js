const mongoose = require('mongoose');

const Schema = mongoose.Schema

const WorkCategory = new Schema({
  title: { type: String, required: true },
}, {
  timestamps: true
});


module.exports = mongoose.model('WorkCategory', WorkCategory)