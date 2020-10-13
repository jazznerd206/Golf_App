const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const courseRoutes = require('./courseRoutes.js');
const holeRoutes = require('./holeRoutes.js');
const userRoundRoutes = require('./userRoundRoutes.js');
const userHoleRoutes = require('./userHoleRoutes.js');

router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/holes', holeRoutes);
router.use('/userHoles', userHoleRoutes)
router.use('/userRounds', userRoundRoutes);


module.exports = router;