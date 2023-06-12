const http = require('http')
const server = http.createServer((request, Response) => {
    //request - so'rov 
    //response - javob
    console.log(request.url);
    Response.write('<h1>Hello  World!</h1>')
    Response.end()
})
server.listen(3000, () =>{
    console.log('server has been started on port: 3000');
})