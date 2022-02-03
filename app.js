// //http는 내장모듈로 내장서버
// //express에 비해서 코드가 지저분해짐
// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   if (req.url === "/") {
//     res.end("여기는 루트입니다.");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인화면입니다.");
//   }
//   console.log(req.url);
// });

// app.listen(7001, () => {
//   console.log("http로 가동된 서버입니다.");
// });

//-------------------------------------------

const express = require("express");
const app = express();

//앱 세팅, 화면 뷰를 처리해주는 엔진 ejs, 많이사용하는 엔진,html과 비슷
//ejs모듈 다운로드해야함
app.set("views", "./views");
app.set("view engine", "ejs");

//render에 index파일을 연결해주고 파일형식은 위에서 ejs라고 해줘서 따로 안써도됨
app.get("/", (req, res) => {
  res.render("home/index");
});

app.get("/login", (req, res) => {
  res.render("home/login");
});

app.listen(7000, () => {
  console.log("서버 가동");
});
