let reloadId = document.getElementById("reload");

reloadId.addEventListener('click', function() {
    chrome.runtime.reload()
    console.log('Extension has been reloaded')
})