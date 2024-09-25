import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/demo.txt'

// let say a file path is given and we have to extract various stuff

console.log(path.basename(filePath));

console.log(path.dirname(filePath));

console.log(path.extname(filePath));

// in order to parse it 
console.log(path.parse(filePath));

// finding current file and directory name 
const __filename =  url.fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);
console.log(__filename);
console.log(__dirname);


//using join

const filepath2 = path.join(__dirname , 'dir1' , 'dir2' , 'dir3' , 'demo.txt');

// joins '/'
console.log(filepath2);