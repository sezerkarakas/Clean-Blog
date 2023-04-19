const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const Post = require('./models/Posts');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');
const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.get('/', postController.getAllPosts);
app.get('/post/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/confirmedpost/:id', postController.updatePost);
app.delete('/post/:id', postController.deletePost);
app.get('/confirmedpost/update/:id', pageController.getUpdatePage);
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage);
app.get('/post', pageController.getPostPage);
app.get('/admin', pageController.getAdminPage);
app.post("/confirmedpost/:id", postController.createConfirmedPost)

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port}'de çalışıyor.`);
});
