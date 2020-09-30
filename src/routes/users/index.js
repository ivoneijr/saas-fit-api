const express = require('express');
const { users } = require('../../controllers');
const { authenticated } = require('../../middlewares/authenticated');
const schema = require('./schema');

const router = express.Router({ mergeParams: true });

/** @summary GET /users/ */
router.get('/', schema.all, users.all);
// router.get('/', authenticated, users.all);

/** @summary GET /users/me */
router.get('/me', authenticated, users.me);

/** @summary GET /users/:id */
// router.get('/:id', authenticated, schema.show, users.show);
router.get('/:id', schema.show, users.show);

module.exports = router;
