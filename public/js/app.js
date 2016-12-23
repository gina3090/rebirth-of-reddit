// jshint esversion: 6

(function(window) {

let mainBox = document.createElement("div");
mainBox.className = "main-box";
document.body.appendChild(mainBox);

function reddit() {
  let redditInfo = JSON.parse(this.responseText);
  // console.log(redditInfo);
  let redditData = redditInfo.data.children;
  // console.log(redditInfo.data.children);
  
  for(let i = 0; i < redditData.length; i++) {
    let redditPost = redditData[i].data;
    // console.log(redditPost.preview.images[0].source.url);
    // console.log(redditPost.title);
    // console.log(redditPost.author);
    // console.log(redditPost.num_comments);
    // console.log(redditPost.created*1000);

    let postBox = document.createElement("div");
    postBox.className = "post-box";
    mainBox.appendChild(postBox);

    let imageBox = document.createElement("div");
    imageBox.className = "image-box";
    postBox.appendChild(imageBox);

    let getImage = document.createElement("IMG");
    let image = redditPost.preview.images[0].source.url;
    getImage.src = image;
    getImage.setAttribute("width", "300");
    getImage.setAttribute("height", "300");
    imageBox.appendChild(getImage);

    let titleBox = document.createElement("h2");
    titleBox.className = "title-box";
    titleBox.innerHTML = redditPost.title;
    postBox.appendChild(titleBox);

    let dateBox = document.createElement("span");
    dateBox.className = "date-box";
    dateBox.innerHTML = new Date(redditPost.created*1000);
    postBox.appendChild(dateBox);

    let authorBox = document.createElement("span");
    authorBox.className = "author-box";
    authorBox.innerHTML = redditPost.author;
    postBox.appendChild(authorBox);

    let viewBox = document.createElement("span");
    viewBox.className = "view-box";
    viewBox.innerHTML = " • " + redditPost.score + " views";
    postBox.appendChild(viewBox);

    let commentBox = document.createElement("span");
    commentBox.className = "comment-box";
    commentBox.innerHTML = " • " + redditPost.num_comments + " comments";
    postBox.appendChild(commentBox);
  }
}

const getReddit = new XMLHttpRequest();
getReddit.addEventListener("load", reddit);
getReddit.open("GET", "https://www.reddit.com/r/puppies.json");
getReddit.send();

document.getElementById("boards").onclick = function() {
location.href = "https://www.reddit.com/r/dogpictures.json";
};

document.getElementById("random").onclick = function() {
location.href = "https://www.reddit.com/r/aww.json";
};

document.getElementById("app").onclick = function() {
location.href = "https://www.reddit.com/r/cute.json";
};

}(window));