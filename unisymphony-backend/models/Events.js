const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    day: {
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], // Enum ensures only these values are accepted
      required: true
    },
    events: [
      {
        date: String, 
        title: String,
        start: String,
        end: String
      }
    ]
  });



const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
