const Post = require('../models/Posts');
const ConfirmedPost = require('../models/confirmedPosts');

const getAllPosts = async (req, res) => {
  const posts = await ConfirmedPost.find({});
  res.render('index', {
    posts,
  });
};

const getPost = async (req, res) => {
  const post = await ConfirmedPost.findById(req.params.id);
  res.render('post', {
    post,
  });
};
const createPost = async (req, res) => {
  try {
    await Post.create(req.body);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};
const updatePost = async (req, res) => {
  const post = await ConfirmedPost.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();
  res.redirect(`/post/${req.params.id}`);
};
const deletePost = async (req, res) => {
  await ConfirmedPost.findByIdAndRemove(req.params.id);
  res.redirect('/');
};

const createConfirmedPost = async (req, res) => {
  const selectedPost = await Post.findById(req.params.id);
  await ConfirmedPost.create({
    title: selectedPost.title,
    detail: selectedPost.detail,
  });
  await Post.findByIdAndRemove(req.params.id);
  res.redirect('/admin');
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  createConfirmedPost,
};
