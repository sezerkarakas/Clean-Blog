const Post = require('../models/Posts');
const ConfirmedPost = require("../models/confirmedPosts")

const getUpdatePage = async (req, res) => {
  const post = await ConfirmedPost.findOne({ _id: req.params.id });
  res.render('post_update', {
    post,
  });
};

const getAboutPage = (req, res) => {
  res.render('about');
};

const getAddPage = (req, res) => {
  res.render('add_post');
};

const getPostPage = (req, res) => {
  res.render('post');
};
const getAdminPage = async (req, res) => {
  const posts = await Post.find({});
  res.render('admin', {
    posts,
  });
};

module.exports = {
  getAboutPage,
  getAddPage,
  getAdminPage,
  getPostPage,
  getUpdatePage,
};
