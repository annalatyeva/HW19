function createPost(title, body) {
    let postHTML = `<h2>${title}</h2><p>${body}</p>`;
    addPost(postHTML);
}

function addPost(postHTML) {
    let postElement = document.createElement('div');
    postElement.classList = 'post';
    postElement.innerHTML = postHTML;
    document.querySelector('.post-conteiner').append(postElement);
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((data) => {
    data.forEach(element => {
        createPost(element.title, element.body);
    });
});