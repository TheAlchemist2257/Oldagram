const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main")
const postLike = document.getElementById("post-like")
const like = document.getElementById("like")


function renderPost() {
    let postList = "" 
    for(let i = 0; i < posts.length; i++) {
        postList += `
        <section>
            <div class="section-container">
                <div class="profile">
                    <img class="avatar" src="${posts[i].avatar}" alt="User Avatar">
                    <div class="profile.text">
                        <p class="name">${posts[i].name}</p>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </div>
            
                <img id="post-like" class="post-img" src="${posts[i].post}" alt="The post image">
                
                <div class="icon-container">
                    <img  class="icon" src="images/icon-heart.png" alt="The like icon">
                    <img id="comment" class="icon" src="images/icon-comment.png" alt="The comment icon">
                    <img id="share" class="icon" src="images/icon-dm.png" alt="The share icon">
                </div>

                <p  class="likes"><span id="like">${posts[i].likes}</span> likes</p>
                <p ><span class="comment">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
        </section>
        `
    }
    main.innerHTML = postList;
}

renderPost()

main.addEventListener('click', function(event){
    let likePlus = ""
    if (event.target && event.target.id === "post-like") {
        like += 1
    }
   like.textContent = like
})
