//NOT USED! JUST A TIP FOR A CLEANER CODE IF THE APP GETS MORE COMPLEX
//We can move all the routes in this file and use only one 'main' route in index.js as a middleware
const router = require('express').Router();

const organisationRouters = require('./routes/organisationRoutes');
router.use('/organisations', organisationRouters);

module.exports = router;
