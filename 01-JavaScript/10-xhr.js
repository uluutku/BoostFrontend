// // XHR

// const jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/posts"

// const getRequest = (callbackFn, endpoint) => {
//     const request = new XMLHttpRequest()
//     console.log(request);
//     request.addEventListener("readystatechange", () => {
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText)
//             callbackFn(null, data)
//         }else if (request.readyState === 4){
//             callbackFn(`${request.status} - Could not fetch the data`, null)
//         }
//     })
//     request.open("GET", endpoint)
//     request.send()
// }

// getRequest((error, response) => {
//     if(error){
//         console.log(error);
//     }else {
//         console.log(response);
//     }
// }   ,jsonPlaceHolderURL)

// const get = (url, cb) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("GET", url)
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === XMLHttpRequest.DONE) {
//             if(xhr.status === 200){
//                 const response = JSON.parse(xhr.responseText)
//                 cb(null, response)
//             } else {
//                 cb("Hata: " + xhr.status, null)
//             }
//         }
//     }
//     xhr.send()
// }

// get(`${jsonPlaceHolderURL}/1`, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// xhr.setRequestHeader("Content-Type", "application/json")

// const postData = {
//     name: "cem",
//     email: "sdfs",
//     body: "lorem"
// }

// send(JSON.stringify(postData))

// XHR ile birer adet get, post, put, patch ve delete isteklerini atan birer fonksiyon yazınız.

const get = (url, cb) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText)
                cb(null, response)
            } else {
                cb("Hata: " + xhr.status, null)
            }
        }
    }
    xhr.send()
}


const post = (url, data, cb) => {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 201){
                const response = JSON.parse(xhr.responseText)
                cb(null, response)
            } else {
                cb("Hata: " + xhr.status, null)
            }
        }
    }
    xhr.send(JSON.stringify(data))
}

const put = (url, data, cb) => {
    const xhr = new XMLHttpRequest()
    xhr.open("PUT", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText)
                cb(null, response)
            } else {
                cb("Hata: " + xhr.status, null)
            }
        }
    }
    xhr.send(JSON.stringify(data))
}

const patch = (url, data, cb) => {
    const xhr = new XMLHttpRequest()
    xhr.open("PATCH", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText)
                cb(null, response)
            } else {
                cb("Hata: " + xhr.status, null)
            }
        }
    }
    xhr.send(JSON.stringify(data))
}

const del = (url, cb) => {
    const xhr = new XMLHttpRequest()
    xhr.open("DELETE", url)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText)
                cb(null, response)
            } else {
                cb("Hata: " + xhr.status, null)
            }
        }
    }
    xhr.send()
}



get ("https://jsonplaceholder.typicode.com/posts", (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
}
)

post("https://jsonplaceholder.typicode.com/posts", {
    title: "Utku",
    body: "Ulu",
    userId: 37
}, (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})

put("https://jsonplaceholder.typicode.com/posts/1", {
    title: "Utku",
    body: "Ulu",
    userId: 37
}, (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})

patch("https://jsonplaceholder.typicode.com/posts/1", {
    title: "Utku",
    body: "Ulu",
    userId: 37
}, (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})  


