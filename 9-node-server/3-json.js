const http = require("http");
const fs = require("fs");

const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
  { name: "FrontEnd" },
];

const server = http.createServer((req, res) => {
  const url = req.url; // what? 클라이언트가 어떤 데이터를 원하는지,
  const method = req.method; // how?, action? 그거로 어떤걸 하고 싶은지,
  if (url === "/courses") {
    // action
    if (method === "GET") {
      // 사용자가 method를 읽고싶다면 = get이라면
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(courses)); // 우리가 가진 courses object를 json 형태로 바꿔 보냄.
    } else if (method === "POST") {
      // 사용자가 데이터 받아와서 새로운 course 쓰고 싶다면 = post라면
      const body = [];
      req.on("data", (chunk) => {
        // 데이터라는 이벤트가 발생하면, 받은 덩어리 자체를
        console.log(chunk);
        body.push(chunk); // body라는 배열에 계속 밀어넣기
      });

      req.on("end", () => {
        // request 이벤트에 모든 데이터가 받아지는 end라는 이벤트가 발생하면
        const bodyStr = Buffer.concat(body).toString(); //body를 다 묶은 다음에 string으로 변환
        const course = JSON.parse(bodyStr); // 받은 json을 object 형태로 parse
        courses.push(course); // 우리가 가진 courses 배열 안에 새로 받은 course 추가
        console.log(course);
        res.writeHead(201); // 추가 후 클라이언트에서 무한정 기다리지 않게 서버에서 응답 필수
        res.end();
      });
    }
  }
});

server.listen(8080);
