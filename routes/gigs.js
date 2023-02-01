const express = require('express');
const router = express.Router();
const {Gig} = require('../models/Gig');

router.get('/', async (req, res) => {
    try {
        const gigs = await Gig.findAll();
        console.log(gigs);
        res.sendStatus(200);
    }
    catch(err)
    {
        console.log(err.message);
    }
});

router.get('/add', async (req, res) => {
    const data = {
        title:'React Native Web App',
        technologies: 'React Native,React.js,Node.js,Express.js,MongoDB,Mongoose',
        budget:'$2000',
        description:'',
        contact_email:'user@example.com'
    };

    let {title, technologies, budget, description, contact_email} = data;

    try{
        await Gig.create({title, technologies, budget, description, contact_email});
        res.redirect('/gigs');
    }catch(err){
        console.log(err.message);
    }
});

module.exports = router;