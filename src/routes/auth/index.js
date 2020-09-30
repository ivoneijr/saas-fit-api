const express = require('express');
const { auth } = require('../../controllers');
const schema = require('./schema');

const router = express.Router({ mergeParams: true });

/** @summary GET /auth/login */
router.post('/login', schema.login, auth.login);

/** @summary POST /auth/refresh */
router.post('/refresh', schema.refresh, auth.refresh);

module.exports = router;
