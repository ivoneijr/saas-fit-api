const express = require('express');
const path = require('path');
const users = require('./users');
const setup = require('./setup');
const auth = require('./auth');
const assessmentComments = require('./assessment_comments');
const invites = require('./invites');

const router = express.Router({ mergeParams: true });

router.use('/static', express.static(path.join(__dirname, '../../public')));

/** @summary GET /status */
router.get(['/status', '/health', '/ping'], async (_, res) =>
  // router.get(['/', '/status', '/health', '/ping'], async (_, res) =>
  res.send({ status: 'It´s Alive!' })
);

/** @summary ALL /auth/* */
router.use('/auth', auth);

/** @summary ALL /users/* */
router.use('/users', users);

/** @summary ALL /setup/* */
router.use('/setup', setup);

/** @summary ALL /assessment_comments/* */
router.use('/assessment_comments', assessmentComments);

/** @summary ALL /invites/* */
router.use('/invites', invites);

/** @summary ALL /* */
router.all('*', async (_, res) => res.status(404).send());

module.exports = router;
