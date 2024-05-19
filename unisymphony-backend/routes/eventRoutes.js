const express = require('express');
const router = express.Router();
const checkToken = require('../checkToken');
const Event = require("../models/Events")


// router.post('/events',checkToken, async (req, res) => {
//     try {
//       const { day, date, title, start, end } = req.body;
//       let event = await Event.findOne({ user:req.token.id, day, date });
  
//       if (!event) {
//         event = new Event({
//           user : req.token.id,
//           day,
//           date,
//           events: [{ title, start, end }]
//         });
//       } else {
//         event.events.push({ title, start, end });
//       }
  
//       await event.save();
  
//       res.status(201).json(event);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

const WebSocket = require('ws');

module.exports = (wss) => {
    const broadcastEvents = (newEventData) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type: 'event', data: newEventData }));
            }
        });
    };

router.post('/events', async (req, res) => {
  try {
    const { day,date, eventData } = req.body;

    // Find the event document for the specified day or create a new one if it doesn't exist
    console.log(date)
    console.log(eventData, eventData.date)
    eventData.date = date
    
    let event = await Event.findOne({ day });

    if (!event) {
      event = new Event({day });
    }
   
    // Add the event data to the events array
    event.events.push(eventData);

    // Save the event document
    await event.save();

    res.status(201).json({ success: true, data: event });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});
  
  router.get('/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
        broadcastEvents(events)
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

return router;
}
