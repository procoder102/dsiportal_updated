const express = require('express');
const router = express.Router();
const User = require('../models/User');

// create login post Api
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;
