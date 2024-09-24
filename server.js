import http from 'http';
const PORT = 8000;
import url from 'url';
import fs from 'fs/promises';
import path from 'path';


// get current path 
const __filename = url.fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);

console.log(__filename);
console.log(__dirname)

const server =  http.createServer(async(req , res)=>{
    try{
        // i need to check the methods 
        if(req.method === 'GET'){
            // if method if get only they it will be able to make the request
            let filepath;
            if(req.url === '/'){
                filepath = path.join(__dirname ,'public' , 'index.html');
            }else if(req.url === '/about'){
                filepath = path.join(__dirname , 'public' , 'about.html');
            }else{
                throw new Error('not found');
            }

            // file path has been set 
            const data =  await fs.readFile(filepath);
            res.setHeader('Content-Type' , 'text/html');
            res.write(data);
            res.end();
        }else{
            // it means it is some other method 
            throw new Error('Method not allowed');
        }
    }catch(err){
        console.log(err);
        res.statusCode = 500;
        res.setHeader('Content-Type' , 'text/plain');
        res.end('Server Error');
    }});

server.listen(PORT , ()=>{
    console.log(`Server is running at ${PORT}`);
})