import http from 'http';
const PORT = 8000;
const server =  http.createServer((req , res)=>{
    // routing 
    if(req.url === '/'){
        res.setHeader('Content-Type' , 'text/html');
        res.end("<h1>Home Page !!</h1>")
    }else if(req.url === '/about'){
        res.setHeader('Content-Type' , 'text/html');
        res.end("<h1>About Page !!</h1>")
    }else if(req.url === '/contact'){
        res.setHeader('Content-Type' , 'text/html');
        res.end("<h1>Contact Page!!</h1>")
    }else{
        res.statusCode = 400;
        res.setHeader('Content-Type' , 'text/plain');
        res.end('Page not found');
    }
});

server.listen(PORT , ()=>{
    console.log(`Server is running at ${PORT}`);
})