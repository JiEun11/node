const fs = require('fs');

// 3가지 형태로
// rename(... ,callback(error, data)) : 비통기
// try{renameSync(...)} catch(e) { } : blocking, 따로 콜백함수 전달 X, 끝날 때까지 넘어가지 않음, error된 상황 따로 전달 X, try catch로 감싸줘야함
// promisess.rename().then().catch(0)

try{
    fs.renameSync('./text.txt', './file-new.txt');
}catch (error){
    console.error(error);
}

fs.rename('./file-new.txt', './text.txt', (error)=>{
    console.error(error);
})
console.log('hello')

fs.promises.rename('./text.txt','./text-new.txt').then(()=> console.log('Done!')).catch(console.error);