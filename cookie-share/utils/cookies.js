export const setCookie = (param) => {
   const { url, name, value } = param
   chrome.cookies.set(param, cookie => {
       console.log(cookie)
   })
}

export const getAllCookies = (url, callback) => {
    chrome.cookies.getAll({domain: url}, function(cookies) {
       callback(cookies)
    })
}

export const removeAllCookies = (url) => {
    getAllCookies(url, cookies => {
        for(let i = 0; i < cookies.length; i++) {
            chrome.cookies.remove({
                url: `${url}${cookies[i].path}`,
                name: cookies[i].name
            })
        }
    })
}