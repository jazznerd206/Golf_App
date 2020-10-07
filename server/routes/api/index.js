const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const courseRoutes = require('./courseRoutes.js');
const holeRoutes = require('./holeRoutes.js')

router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/holes', holeRoutes);

module.exports = router;