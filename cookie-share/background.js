/**
 * step1: get All siteA cookies[getAllCookies]
 * step2: copy siteA cookies to siteB[setCookies]
 * step3: listen siteA cookies change and reset these changed cookies to siteB
*/
const domain_url = chrome.runtime.getURL('domain.json');
const setCookie = (param) => {
    const { url, name, value } = param
    chrome.cookies.set(param, cookie => {
        console.log(cookie)
    })
 }
 
 const getAllCookies = (url, callback) => {
     chrome.cookies.getAll({ domain: url }, function(cookies) {
         console.log('cookies==>',url, cookies)
        callback(cookies)
     })
 }

fetch(domain_url)
    .then((response) => response.json()) //assuming file contains json
    .then(async json => {
        const { from, to } = json
        console.log(from, to)
        /**get all from-site cookies,reset to-site cookies*/ 
        getAllCookies(from, function(cookies) {
            console.log(`siteA cookies：${cookies}`)
            if (cookies) {
                for(let i = 0; i < cookies.length; i++) {
                    const { path, name, value } = cookies[i]
                    setCookies({
                        url: `${to}${path}`,
                        name: name,
                        value: value
                    })
                }
            }
        })
        
        getAllCookies(to, function(cookies) {
            console.log(`siteB cookies：${cookies}`) 
        })
             
    })