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
// middleware are the functions/code that runs on the server between request coming in and the response going back to browser

// logger middleware
const logger = (req , res  , next) =>{
    console.log(`${req.url} ${req.method}`)
    next(); // means move to next middleware
}
// so we have creates a simple logger function
const  jsonMiddleWare = (req , res , next) =>{
    res.setHeader('Content-Type' , 'application/json' );
    next();
}

// Task is to push the new user into the db
// let user array be database
const createUserHandler = (req ,res) =>{
    let body = '';
    // Listen for data 
    // divided the data entered bt the user in chunks
    req.on('data',(chunk) =>{
     body+= chunk.toString();   
    })
 
    req.on('end', ()=>{
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        console.log("new user added");
        res.write(JSON.stringify(newUser)); 
        res.end();
    })
}
const server = createServer((req , res)=>{
    logger(req , res , ()=>{
        jsonMiddleWare(req , res , ()=>{
            if(req.url === '/api/users' && req.method === 'GET'){

                res.write(JSON.stringify(users));
                res.end();
            } else if(req.url === '/api/users' && req.method === 'POST'){
                createUserHandler(req , res);
            }
            else if(req.url.match(/\/api\/users\/([0-9]+)/)){
                // now we have to grab an id 
                const id  = req.url.split('/')[3];
                console.log(id);
                const user =  users.find((user) => user.id === parseInt(id));
                if(user){
                res.write(JSON.stringify(user));
                res.end();
                }else{
                    res.statusCode = 404;
                    // jsonMiddleWare(req , res);
                    res.write(JSON.stringify({message : "user doesn't exit"}));
                    res.end();
                }
            }
            else{
                res.statusCode = 404;
                // jsonMiddleWare(req , res);
                res.write(JSON.stringify({ErrorMessage : 'Route not found'}));
                res.end();
            }
        })
    })
})
server.listen(PORT  , ()=>{
    console.log(`Server is running at ${PORT} successfully`);
})