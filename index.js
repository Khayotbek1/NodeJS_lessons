const http = require('http');
const server = http.createServer((request, Response) => {
    //request bu - serverga so'rov
    //response bu - server javobi
    console.log(request.url);
    Response.write('<h1>Hello Khayot</h1>')
    Response.end()
})

server.listen(3000, () => {
    console.log('Server has been started on port: 3000');
})
