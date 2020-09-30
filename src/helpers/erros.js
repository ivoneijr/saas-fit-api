module.exports = {
  INVITE_ADD_ERROR: {
    code: 422,
    message: 'Could not insert invite',
    type: 'INVITE_ADD_ERROR',
  },
  ASSESSMENT_COMMENT_DELETE_ERROR: {
    code: 422,
    message: 'Could not remove comment',
    type: 'ASSESSMENT_COMMENT_DELETE_ERROR',
  },
  USER_ADD_ERROR: {
    code: 422,
    message: 'Could not insert new user',
    type: 'USER_ADD_ERROR',
  },
  USER_NOT_FOUND: {
    code: 422,
    message: 'User not found',
    type: 'USER_NOT_FOUND',
  },
  LEAD_NOT_CREATED: {
    code: 422,
    message: 'Could not save lead',
    type: 'LEAD_NOT_CREATED',
  },
  SCHEDULE_NOT_FOUND: {
    code: 422,
    message: 'Schedule not found',
    type: 'SCHEDULE_NOT_FOUND',
  },
  SCHEDULE_NOT_CREATED: {
    code: 422,
    message: 'Could not save schedule',
    type: 'SCHEDULE_NOT_SAVE',
  },
  SCHEDULE_SESSION_STARTED: {
    code: 422,
    message: 'Session has already started',
    type: 'SCHEDULE_SESSION_STARTED',
  },
  SCHEDULE_NOT_UPLOADED: {
    code: 422,
    message: 'Could not upload schedule',
    type: 'SCHEDULE_NOT_UPLOADED',
  },
};
