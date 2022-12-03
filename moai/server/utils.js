const path = require("path");
const fs = require('fs')

exports.getModifiedHTML = (domain) => {
    let secFilePath = path.join(__dirname, '..', 'client', 'public', 'build', 'serverindex.html')
    let originalIndex = path.join(__dirname, '..', 'client', 'public', 'index.html')
    let data = fs.readFileSync(originalIndex, { encoding: 'utf-8' })
        .replace(new RegExp("href='/", 'g'), `href='${domain}/`)
        .replace(new RegExp("src='/", 'g'), `src='${domain}/`)
    fs.writeFileSync(secFilePath, data, (err) => { })
    return secFilePath;
}