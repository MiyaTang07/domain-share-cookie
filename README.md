## Overview
- This tool is to create a <a href="https://developer.chrome.com/docs/extensions/mv3/getstarted/">chrome exstension</a> for cookie share from one site to another.
- The very basic fundamatal is to read domain informations from where you input. And read this data to build a extension.

## Usage
- Frist of all,you need to install this package tool as global.So you could use some convenient commands.
```
npm install domain-share-cookie -g
```

## Command Line 
- If you suppose to copy siteA cookies to siteB and you could use set command. The last one will cover up the first one you set up if u set domain info twice.
```
domain set -F http://A.com
domain set -T http://B.com
```
- domain view lists all domain informations.
```
domain view
```
- Remember domain informations which supply or share is always in need!
- Once you set up the basic information and you can run
```
domain init
```
to build your own chrome extension.

### Something important
- If you feel like cookies from siteA is timeout, all you need to do is to reload the local chrome extension for the cookies refresh!