const apiRoutes = require ('./API');
const router = require('express').Router();

//troubleshoot here instead of passing => function we would normally pass an object (/api !=/api/books) review router class examples
router.use('/api', apiRoutes);

module.exports = router;