import fs from 'fs/promises'

// more two methods 


// //1 using .then()
// fs.readFile('./demo.txt' , 'utf-8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// // 2 using await 

// const readFile = async() =>{
//     try{
//         const data = await fs.readFile('./demo.txt' , 'utf-8');
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }

// readFile(); // it is a fucntion





const writeFile = async() =>{
    try {
        await fs.writeFile('./demo.txt' , 'hi i am writinig in this file');
        console.log("writing .....")
    } catch (error) {
        console.log(error);
    }
};

const appendFile = () =>{
    try {
        fs.appendFile('./demo.txt' , '\n this is appended text');
        console.log("appended text......")
    } catch (error) {
        console.log(error)
    }
}
writeFile();
appendFile();



