const fs = require('fs').promises;

// read a file
fs.readFile('./text-new.txt','utf8')
    .then(data=> console.log(data))
    .catch(console.error);

// writing a file
fs.writeFile('./text-new.txt','hello, Dream Coders! :) ')
.catch(console.error);

fs.appendFile('./text-new.txt','Yo! :) ')
    .catch(console.error);

// 순서가 중요하다면
fs.appendFile('./text-new.txt','Yo! :) ')
    .then(()=>{
        // copy
        fs.copyFile('./text-new.txt', './file2.txt')
            .catch(console.error);
    })
    .catch(console.error);

// copy
fs.copyFile('./text-new.txt', './file2.txt')
    .catch(console.error);

// folder
fs.mkdir('sub-folder')
    .catch(console.error);      //mkdir도 return하는 값 없으므로

fs.readdir('./')
    .then(console.log)
    .catch(console.error);

