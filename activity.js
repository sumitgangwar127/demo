let fs = require('fs');
let path= require('path');

let extensions={
    "Images":['.png','.jpg','.jpeg','.gif'],
    'Audio':['.mp3'],
    'Documents':['.pdf','.txt','.doc'],
    'Compressed':['.zip','.rar'],
    'Videos':['.mkv','.mp4']
}

let input = process.argv.slice(2);
let folderPath = input[0];
let extFolderPath = folderPath;
console.log(input[0]);
let contant = fs.readdirSync(input[0]);
console.log(contant);

for(let i=0;i<contant.length;i++){
    console.log(path.extname(contant[i]));
}

