// const express = require('express');
// const router = express.Router();
// const controllers = require('./../controllers/controllers');

// router.get('/api/v1/say-something', controllers.saySomething);

// module.exports = router;
/* Old code */

const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/say-something', controllers.saySomething);

module.exports = router;
