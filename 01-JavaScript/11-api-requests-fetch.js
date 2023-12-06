// const jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/posts"

// let commentsThen;

// const getAllCommentsThen = () => {
//     return fetch("https://jsonplaceholder.typicode.com/comments")
//     .then(res=> res.json())
//     .then(data => commentsThen = data)
// }

// getAllCommentsThen().then(res => console.log(commentsThen))

// FETCH ile getCommentById, deleteComment, putComment, patchComment, postComment

const getCommentById = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

getCommentById(1)

const deleteComment = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

deleteComment(1)

const putComment = (id, data) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

putComment(1, {
    name: "utku",
    email: "sdfs",
    body: "lorem"
})

const patchComment = (id, data) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

patchComment(1, {
    name: "utku",
    email: "sdfs",
    body: "lorem"
})

const postComment = (data) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

postComment({
    name: "utku",
    email: "sdfs",
    body: "lorem"
})

