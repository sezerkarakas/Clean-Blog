const Post = require('../models/Posts');

const getUpdatePage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
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
const getAdminPage = (req, res) => {
  res.render('admin');
};

module.exports = {
  getAboutPage,
  getAddPage,
  getAdminPage,
  getPostPage,
  getUpdatePage,
};
