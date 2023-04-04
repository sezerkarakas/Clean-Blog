const express = require('express');
const mongoose = require("mongoose")
const ejs = require('ejs');
const Post = require("./models/Posts")
const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.render('index', {
    posts
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get("/post", (req,res) => {
  res.render("post")
})
app.get("/admin", (req, res) => {
  res.render("admin")
})

app.post("/posts", async (req, res) => {
  try {
    await Post.create(req.body)
    res.redirect("/")
  } catch (error) {
    console.log(error)
  }

})

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port}'de çalışıyor.`);
});
