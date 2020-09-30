const express = require('express');
const { invites } = require('../../controllers');
// const { authenticated } = require('../../middlewares/authenticated');
const schema = require('./schema');

const router = express.Router({ mergeParams: true });

/** @summary POST /invites/ */
router.post('/', schema.insert, invites.insert);

/** @summary GET /invites/pending/ */
router.get('/pending', invites.pending);

/** @summary GET /invites/validate_hash/ */
router.get('/validate_hash', schema.validateHash, invites.validateHash);

module.exports = router;
