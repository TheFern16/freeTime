// User Schema
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

  user: {

    name: {
      type: String,
      required: true
    },

    scheduleType: {
      type: String,
      required: true
    },

    workHours: {
      type: [Number],
      required: true
    },

    sleepTime: {
      type: [Number],
      required: true
    }

  }

});