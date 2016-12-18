// jshint esversion: 6

(function(window) {

let mainBox = document.createElement("div");
mainBox.className = "mainBox";
document.body.appendChild(mainBox);

let postBox = document.createElement("div");
postBox.id = "postBox";
mainBox.appendChild(postBox);

let imageBox = document.createElement("div");
imageBox.id = "imageBox";
postBox.appendChild(imageBox);

let titleBox = document.createElement("div");
titleBox.id = "titleBox";
postBox.appendChild(titleBox);

let authorBox = document.createElement("div");
authorBox.id = "authorBox";
postBox.appendChild(authorBox);

function reddit() {
  let redditInfo = JSON.parse(this.responseText);
  // console.log(redditInfo);
  // console.log(redditInfo.data.children[4].data);
  let image = redditInfo.data.children[4].data.preview.images[0].source.url;
  document.getElementById("imageBox").innerHTML = image;
  let title = redditInfo.data.children[4].data.title;
  document.getElementById("titleBox").innerHTML = title;
  let author = redditInfo.data.children[4].data.author;
  document.getElementById("authorBox").innerHTML = author;
}

const getReddit = new XMLHttpRequest();
getReddit.addEventListener("load", reddit);
getReddit.open("GET", "https://www.reddit.com/r/aww.json");
getReddit.send();

}(window));