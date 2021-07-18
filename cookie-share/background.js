/**
 * step1: get All siteA cookies[getAllCookies]
 * step2: copy siteA cookies to siteB[setCookies]
 * step3: listen siteA cookies change and reset these changed cookies to siteB
*/
const domain_url = chrome.runtime.getURL('domain.json');
const setCookie = (param) => {
    chrome.cookies.set(param, cookie => {
        const { name, value } = cookie
        console.log(`🌲${name}=${value} is added🌲`)
    })
 }
 
 const getAllCookies = (url, callback) => {
     chrome.cookies.getAll({ domain: url }, function(cookies) {
        console.log(`${url} cookies==>`, cookies)
        callback(cookies)
     })
 }

fetch(domain_url)
    .then((response) => response.json()) //assuming file contains json
    .then(async json => {
        const { from, to } = json
        let _from = from.replace(/(\w+):\/\//g, '')
        let _to = to.replace(/(\w+):\/\//g, '')
        console.log(_from, _to)
        /**get all from-site cookies,reset to-site cookies*/ 
        getAllCookies(_from, function(cookies) {
            if (cookies) {
                for(let i = 0; i < cookies.length; i++) {
                    const { name, value, path } = cookies[i]
                    setCookie({
                        domain: _to,
                        name: name,
                        value: value,
                        url: to
                    })
                }
            }
        })
        getAllCookies(_to, () => {})  
    })