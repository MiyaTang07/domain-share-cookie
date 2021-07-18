/**
 * popup.html仅用来reload extension,重置cookie信息的同步
*/
let reloadId = document.getElementById("reload");

reloadId.addEventListener('click', function() {
    chrome.runtime.reload()
    console.log('Extension has been reloaded')
})