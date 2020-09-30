const express = require('express');
const { setup } = require('../../controllers');

const router = express.Router({ mergeParams: true });

/** @summary GET /setup/landing */
router.get('/landing', setup.landing);

module.exports = router;
