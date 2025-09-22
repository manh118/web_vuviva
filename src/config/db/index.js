const mongoose = require('mongoose')
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/WebVavivu')
    console.log('Connect succes')
  } catch (error) {
    console.log('Connect false')
  }
}

module.exports = { connect }
