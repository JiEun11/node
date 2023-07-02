const process = require('process');

console.log(process.execPath);  //실행되고 있는 node의 위치
console.log(process.version);   // node version
console.log(process.pid);       // 프로세스 ID
console.log(process.ppid);      // 프로세스 부모의 ID
console.log(process.platform);  // platform 정보
console.log(process.env);       // 컴에 저장된 환경변수 정보들
console.log(process.uptime());  // 얼마나 실행되고 있었는지
console.log(process.cwd());     // 현재 실행되고 있는 node 경로
console.log(process.cpuUsage()); // cpu 사용량

setTimeout(()=> {
    console.log('setTimeOut');
}, 0);  //0초 있다가 내 콜백함수 수행해줘

process.nextTick(()=>{  // 지금은 아닌데 현재 수행되고 있는 코드 완료 후 내가 등록한 콜백함수 테스크 큐에 넣어줘
    console.log('nextTick');
});