const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'templates'), err => {
//     if (err) throw new Error()
//     console.log('Folder was create successfully');
// })
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw new Error()
//     console.log('Folder was create successfully');
// })

fs.writeFile(path.join(__dirname, 'notes', 'july.txt'), 'Create new course NodeJS', err => {
    if (err) throw new Error()
    console.log('File was created successfully');
    

    fs.appendFile(path.join(__dirname, 'notes', 'july.txt'), 'and microservice project', err => {
        if (err) throw new Error()
        console.log('File was changed successfully');

        fs.readFile(path.join(__dirname, 'notes', 'july.txt'), 'utf-8', (err, data) => {
            if(err) throw new Error()
            console.log(data);
        })
    })
})

