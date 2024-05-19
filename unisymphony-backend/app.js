// const express = require("express");
// const http = require('http');
// const WebSocket = require('ws');
// const cors = require("cors");

// const dataBase = require("./db");
// const { router: jobRoutes, broadcastJobPost } = require('./routes/jobRoutes'); 
// const app = express();
// app.use(cors());
// const port = process.env.port || 8000;

// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   }),
// );
// const server = http.createServer(app);

// // Create WebSocket server
// const wss = new WebSocket.Server({ server });

// wss.on('connection', (ws) => {
//   console.log('A user connected to WebSocket');

//   // Handle WebSocket messages (if needed)
//   ws.on('message', (message) => {
//     console.log('Received message:', message);
//     // You can handle messages received from clients here
//   });
// });


// app.use('/api', require('./routes/chatRoutes'));

// app.use('/api', require('./routes/eventRoutes'));

// app.use('/api', require('./routes/insightsRoutes'));

// app.use('/api', jobRoutes(wss));

// app.use ("/api", require('./routes/userRoutes'));

// app.use("/api", require("./routes/followerRoutes"));

// app.use("/api", require("./routes/followingRoutes"));

// app.get("/", (req, res) => {
//   res.send("This is auth page");
// });















// app.listen(port, () => {
//     console.log("server loading in : " + port);
//   });
  

const express = require("express");
const http = require('http');
const WebSocket = require('ws');
const cors = require("cors");
const dataBase = require("./db");
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Handle WebSocket connections
wss.on('connection', (ws) => {
  console.log('A client connected');
  ws.on('message', (message) => {
    console.log('Received message:', message);
   
  });
  ws.on('close', () => {
    console.log('A client disconnected');
  });
});

// app.use('/api', require('./routes/chatRoutes'));
app.use('/api', require('./routes/eventRoutes')(wss));
app.use('/api', require('./routes/insightsRoutes'));
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/followerRoutes'));
app.use('/api', require('./routes/followingRoutes'));

// Require and use jobRoutes as a function passing wss
const jobRoutes = require('./routes/jobRoutes')(wss);
app.use('/api', jobRoutes);

const chatRoutes = require('./routes/chatRoutes');
app.use('/api', chatRoutes.router)
chatRoutes.setWebSocketServer(wss);

app.get("/", (req, res) => {
  res.send("This is auth page");
});

server.listen(port, () => {
  console.log("Server loading in : " + port);
});
