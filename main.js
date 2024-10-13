const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "./images/avatar-vangogh.jpg",
      post: "./images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "./images/avatar-courbet.jpg",
      post: "./images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "./images/avatar-ducreux.jpg",
      post: "./images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

const postContainerEl = document.getElementById('post-container')
function render() {
  let mainHtml = ''
  for(let post = 0; post < posts.length; post++) {
    mainHtml += `
    <div class='post'>
      <div class="profile-section">
          <img class="avatar" src="${posts[post].avatar}" alt="${posts[post].name}">
          <p class="bold">${posts[post].name}<span class="location">${posts[post].location}</span></p>
      </div>
      <img class="post-img" src="${posts[post].post}" alt="${posts[post].name}">
      <div class="icon-container">
        <img src="./images/icon-heart.png" alt="">
        <img src="./images/icon-comment.png" alt="">
        <img src="images/icon-dm.png" alt="">
      </div>
      <div class="info-container">
        <span class="bold">${posts[post].likes} likes</span>
        <p class="bold">${posts[post].username}<span class="post-description"> ${posts[post].comment}</span></p>
      </div>
    </div>
    `
  }
  postContainerEl.innerHTML = mainHtml
}

render()

