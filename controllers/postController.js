const Post = require('../models/Posts');

const getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
};

const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
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
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();
  res.redirect(`/post/${req.params.id}`);
};
const deletePost = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect('/');
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
