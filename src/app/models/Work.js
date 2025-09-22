const mongoose = require('mongoose');

const Schema = mongoose.Schema

const Work = new Schema({
  title: { type: String, required: true },
  sub_title: { type: String, required: true },
  description: { type: String, required: true },  
  mainImage: { type: String, required: true },
  images: [{ type: String }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'WorkCategory',required: true },  
  
}, {
  timestamps: true
});


module.exports = mongoose.model('Work', Work)