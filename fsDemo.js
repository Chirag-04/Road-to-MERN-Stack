import fs from 'fs';

// readFile

// async way 
fs.readFile('./demo.txt' , 'utf-8' , (err , data)=>{
    if(err) console.log( err);
    console.log(data);
})

// sync way 
const data =  fs.readFileSync('./demo.txt' , 'utf-8');
console.log(data);





