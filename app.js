const user = require('./user')
const yargs = require('yargs')

yargs(process.argv.slice(2))
    .command({
        command: 'list',
        aliases: ['ls'],
        desc: "list",
        handler:() => {
            user.list()
        }
    })
    .command({
        command: 'add',
        aliases: ['add'],
        desc: "add",
        handler: (argv) => {
            user.add({title: argv.title, level: argv.level})
        }
    })
    .command({
        command: 'remove',
        aliases: ['rm'],
        desc: "remove",
        handler: (argv) => {
            user.remove({title: argv.title})
        }
    })
    .command({
    command: 'read',
    aliases: ['rd'],
    desc: "read",
    handler: (argv) => {
        user.read({title: argv.title})
    }
}).parse()