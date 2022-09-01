function loadPost() {
    // console.log('loading post data');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

/* 
1. get the element where you add the new element
2. create child element
3. set innertext and innerHtml
4. appentChild
*/


function displayPost(posts) {
    // console.log(post);
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        // console.log(posts);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4>User- ${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <h5>Post: title</h5>
        <h5>Post Description: ${post.body}</h5>
      `;
        postContainer.appendChild(postDiv);
    }
}

loadPost();

