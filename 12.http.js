const http= require('http')
const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.end('Welcome to our Homepage:')
    }
   if(req.url === '/about'){
       res.end('Here is something about me!')

   }
   res.end(
       `<h1>Hello World!</h1>
       <p>You can not find what you are looking for here</p>
       <a href="/">back to Homepage</a>
       `)
})

server.listen(5000)