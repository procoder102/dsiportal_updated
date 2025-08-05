const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/dsi_portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
































// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 5000;

// // Middleware to parse JSON
// app.use(bodyParser.json());

// // Sample POST API
// app.post('/api/data', (req, res) => {
//     const userData = req.body;

//     // Log data to the console (you can save to DB here)
//     console.log('Received data:', userData);

//     res.status(200).json({
//         message: 'Data received successfully',
//         data: userData
//     });
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
