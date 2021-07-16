### Overview
- This tool is to create a <a href="https://developer.chrome.com/docs/extensions/mv3/getstarted/">chrome exstension</a> for cookie share from one site to another.
- The very basic fundamatal is read domain informations from where you input. And read this data to build a extension.

### Usage
- Frist of all,you need to install this package tool as global.So you cound use some convenient commands.
```
npm install domain-share-cookie -g
```
- 

### Support 
- If you suppose to copy siteA cookies to siteB and you could use set command. The last one will cover up the first one you set up if u set domain info twice.
```
domain set from=http://A.com
domain set to=http://B.com
```
- Other command lines support.
```
domain delete from
domain delte to
```
- Remember the set information is always in needed!
- Once you set up the basic information and you can run
```
domain create extension
```
to build your own chrome extension.

### Something important
- If you feel like cookies from siteA is timeout,you need to reload the local chrome extension for the cookies refresh!