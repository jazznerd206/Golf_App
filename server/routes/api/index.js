const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const courseRoutes = require('./courseRoutes.js');

router.use('/users', userRoutes);
router.use('/courses', courseRoutes);

module.exports = router;