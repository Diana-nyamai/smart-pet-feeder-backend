require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
    res.send('THIS IS A TEST ROUTE');
})

// import routes
const feederRoutes = require('./routes/feederRoute');
app.use('/api/feeder', feederRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}` );
})

