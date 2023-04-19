const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const ConfirmedPost = mongoose.model('ConfirmedPost', PostSchema);

module.exports = ConfirmedPost
