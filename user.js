let js = require('./user.json')
const fs = require('fs')

function list() {
    console.log(js.languages)
}

function add(language) {
    let newlng = new Object()
    newlng.title = language.title
    newlng.level = language.level

    js.languages.push(newlng)

    let tmp = JSON.stringify(js)
    fs.writeFile('user.json', tmp, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
}

function remove(title) {
    let index = js.languages.map(function (e) {
        return e.title
    }).indexOf(title.title)
    js.languages.splice(index, 1)

    let tmp = JSON.stringify(js)
    fs.writeFile('user.json', tmp, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });

}

function read(title) {
    let index = js.languages.map(function (e) {
        return e.title
    }).indexOf(title.title)

    console.log(js.languages[index])
}

module.exports = {list, add, remove, read}