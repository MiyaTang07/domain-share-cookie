/**
 * step1: get All siteA cookies[getAllCookies]
 * step2: copy siteA cookies to siteB[setCookies]
 * step3: listen siteA cookies change and reset these changed cookies to siteB
*/

// chrome.cookies.onChanged.addListener(function(info) {
//    console.log("onChanged" + JSON.stringify(info));
// });