const router = require('express').Router();
const googleRoutes = require ('./google.js');

router.use('/google/title:?', googleRoutes);