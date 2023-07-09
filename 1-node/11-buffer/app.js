// Fixed-size chuck of memory
// array of integers, byte of data

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length)
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());    // toString에는 인코딩 전달 가능, 기본이 utf-8

// create
const buf2 = Buffer.alloc(2);   // memory에서 사용가능한 chuck 찾아서 초기화 시켜줌.
const buf3 = Buffer.allocUnsafe(2); // 초기화 하지 않음 그래서 더 fast
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);    // buf2의 걸 가져와서 buf3에
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString())