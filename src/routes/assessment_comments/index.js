const express = require('express');
const { assessmentComments } = require('../../controllers');
// const { authenticated } = require('../../middlewares/authenticated');
const schema = require('./schema');

const router = express.Router({ mergeParams: true });

/** @summary POST /assessment_comments/ */
router.post('/', schema.insert, assessmentComments.insert);

/** @summary DELETE /assessment_comments/:id */
router.delete('/:id', schema.delete, assessmentComments.remove);
// router.get('/', authenticated, users.all);

module.exports = router;
