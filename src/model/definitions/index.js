const { bookshelf } = require('../../config/db');

const AssessmentComment = bookshelf.Model.extend({
  tableName: 'assessment_comments',
  idAttribute: 'id',
  hasTimestamps: ['created_at', 'updated_at'],
});

const AssessmentUpload = bookshelf.Model.extend({
  tableName: 'assessment_uploads',
  idAttribute: 'id',
  hasTimestamps: ['created_at', 'updated_at'],
});

const Assessment = bookshelf.Model.extend({
  tableName: 'assessments',
  idAttribute: 'id',
  hasTimestamps: ['created_at', 'updated_at'],
  comments() {
    return this.hasMany(AssessmentComment, 'assessment_id', 'id');
  },
  uploads() {
    return this.hasMany(AssessmentUpload, 'assessment_id', 'id');
  },
});

const User = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'id',
  hasTimestamps: ['created_at', 'updated_at'],
});

const Coach = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'id',
  hasTimestamps: ['created_at', 'updated_at'],
  assessments() {
    return this.hasMany(Assessment, 'coach_id', 'id');
  },
});

const Pupil = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'id',
  hasTimestamps: ['created_at', 'updated_at'],
  assessments() {
    return this.hasMany(Assessment, 'pupil_id', 'id');
  },
});

module.exports = {
  User,
  Pupil,
  Coach,
  Assessment,
};
