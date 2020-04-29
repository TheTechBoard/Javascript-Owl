const posts = [
  { title: "Post One", body: "This is post one." },
  { title: "Post Two", body: "This is post Two." }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}<li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
// getPosts();

//This function will not work as it runs after 2 seconds but at 1 sec the DOM is rendered as a result the function is not executed.
//This is where Asynchronous concepts comes into play.
createPost({ title: "Post 3", body: "This is post 3" }, getPosts);
