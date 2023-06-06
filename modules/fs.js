const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, 'templates'), err => {
    if (err) throw new Error()

    console.log('Folder created succsessfully');
})

fs.mkdir(path.join(__dirname, 'notes'), err => {
    if(err) throw new Error()
    console.log("Folder created succeccfully");
})

fs.writeFile(path.join(__dirname, 'notes', 'July.txt'), 'Create new course NodeJS', err => {
    if (err) throw new Error()
    console.log('File was created successfully');
});

fs.writeFile(path.join(__dirname, 'templates', 'base.js'), 'Bazadagi malumotlar kiritilsin', err => {
    if (err) throw new Error()
    console.log('File was created successfully');
})

fs,fs.writeFile(path.join(__dirname, 'templates', 'base.txt'), 'Write bas information', err => {
    if (err) throw new Error()
    console.log('File was created successfully');
})

fs.writeFile(path.join(__dirname, 'notes', 'july.js'), '// Iyun oyidagi malumotlar kiritilsin', err => {
    if (err) throw new Error()
    console.log('File was created successfully');
})

fs.writeFile(path.join(__dirname, 'notes', 'index.html'), '// html file', err => {
    if (err) throw new Error()
    console.log('File create successfully');
})

