const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

// If no API routes are hit, send the request to the React app
router.use(function(req, res) {
  const index = path.join(__dirname, '../../src/public/index.html')
  console.log("=======================================")
  console.log(`index url link to public folder ${index}`)
  console.log("=======================================")
  res.sendFile(index);
});

module.exports = router;