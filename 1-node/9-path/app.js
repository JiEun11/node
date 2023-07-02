const path = require('path');

// POSIX (Unix:Mac,Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);     //현재 수행되고 있는 경로 이름
console.log(__filename);    //현재 수행되고 있는 파일 이름

console.log(path.sep);           //경로 구분자
console.log(path.delimiter);    // 환경변수 구분자

// basename
console.log(path.basename(__filename)); //파일 정보만
console.log(path.basename(__filename, '.js'));  //파일 이름만

// dirname
console.log(path.dirname(__filename));  //디렉토리 이름만

// extension
console.log(path.extname(__filename));  //확장자만

// parse
const parsed = path.parse(__filename);  //전체 경로 분리 가능
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);  // string 형태로 변환
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize
console.log(path.normalize('./folder//////sub'));   //잘못된 경로 알아서 수정해줌

// join
console.log(__dirname + path.sep + 'image'); // 현재 디렉토리에 이미지라는 폴더 만들기
console.log(path.join(__dirname, 'image')); // 위의 것 더 간단하게