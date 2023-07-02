let count = 0;

function increase(){
    count++;
}

function getCount() {
    return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;    //처음의 exports는 module의 exports를 가리킴
console.log(module.exports === exports);
exports = {};
exports.increase = increase;    // 다른 object 대입 시 exports는 다른 참조값을 가짐..주의
console.log(module.exports === exports);
