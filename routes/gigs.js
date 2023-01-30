const express = require('express');
const router = express.Router();
const Gig = require('../models/Gig');

router.get('/', async (req, res) => {
    try {
        const gigs = await Gig.findAll()
        console.log(gigs);
    }
    catch(err)
    {
        console.log(err.message);
    }
})

module.exports = router;