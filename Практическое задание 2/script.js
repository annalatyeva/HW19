let postTitleDiv = document.querySelector('#post-title');
let postTitle;

let postBodyDiv = document.querySelector('#post-body');
let postBody;

let emptyInputMessage = document.querySelector('.empty-input-message');

function getPostInfo() {
    postTitle = postTitleDiv.value;
    postBody = postBodyDiv.value;

    if (postTitle != '' && postBody != '') {
        emptyInputMessage.textContent = '';
        let post = {
            title: postTitle,
            body: postBody,
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(post),
        })
        .then((response) => response.json())
        .then((data) => {
            let postDiv = document.createElement('div');
            postDiv.classList = 'post';
            postDiv.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`
            document.querySelector('.post-conteiner').append(postDiv);
            postTitleDiv.value = '';
            postBodyDiv.value = '';
        })
        .catch((error) => console.log('Ошибка', error));
    }
    else if (postTitle === '' && postBody === '') {
        emptyInputMessage.textContent = 'Введите заголовок поста и текст поста!';
    }
    else if (postTitle === '' && postBody != '') {
        emptyInputMessage.textContent = 'Введите заголовок поста!';
    }
    else if (postBody === '' && postTitle != '') {
        emptyInputMessage.textContent = 'Введите текст поста!';
    }
}

document.querySelector('#create-post-button').addEventListener('click', getPostInfo);