import {createServer} from 'http';
const PORT = 8000

const users = [
    {
        id : 1 , 
        name : "Chirag"
    },
    {
        id : 2,
        name : "Adam"
    },
    {
        id: 3,
        name : "Marsh"
    }
];
const server = createServer((req , res)=>{
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type' , 'application/json' );
        res.write(JSON.stringify(users));
        res.end();
    }else if(req.url.match(/\/api\/users\/([0-9]+)/)){
        // now we have to grab an id 
        const id  = req.url.split('/')[3];
        console.log(id);
        const user =  users.find((user) => user.id === parseInt(id));
        if(user){
            res.setHeader('Content-Type' , 'application/json' );
        res.write(JSON.stringify(user));
        res.end();
        }else{
            res.statusCode = 404;
            res.setHeader('Content-Type' , 'application/json' );
            res.write(JSON.stringify({message : "user doesn't exit"}));
            res.end();
        }
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type' , 'application/json' );
        res.write(JSON.stringify({ErrorMessage : 'Route not found'}));
        res.end();
    }
})
server.listen(PORT  , ()=>{
    console.log(`Server is running at ${PORT} successfully`);
})