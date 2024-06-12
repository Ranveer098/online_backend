// Import modules
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
// Import body-parser


// Import url
let url = require('./url');

// Create REST object
let app = express();

// Set JSON as MIME type
app.use(bodyparser.json());

// Client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }));

// Enable CORS -> Cross Origin Resource Sharing -> communication among various ports
app.use(cors());

// Connect to MongoDB
mongoose.connect(url, { dbName: "nodedb" })
    .then(() => {
        console.log('Connection Success');
    }, (errRes) => {
        console.log("Connection failed: ", errRes);
    });

// Import routes
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes'); // Import cart routes

// Use routes
app.use("/", productRoutes);
app.use("/", cartRoutes); // Use cart routes

app.use('/user', userRoutes)
// Create port
let port = 8080;

// Assign port number
app.listen(port, () => {
    console.log('Server listening on port: ', port);
});
