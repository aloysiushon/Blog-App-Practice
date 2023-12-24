import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.post("/posts", (req, res) => {
  const post = { id: Date.now(), title: req.body.title, content: req.body.content };
  console.log(post);
  posts.push(post);
  res.redirect('/');
});

// app.delete("/posts/:postId", (req, res) => {
//   const postId = req.params.postId;
//   const index = posts.findIndex(post => post.id == postId);
//   if (index !== -1) {
//     // Remove the post from the array
//     posts.splice(index, 1);
//   } else {
//     console.log("Failed");
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
