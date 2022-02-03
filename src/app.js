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
//모듈
const express = require("express");
const app = express();
//라우팅가능하게 home에 담아줌
const home = require("../routes/home");

//앱 세팅, 화면 뷰를 처리해주는 엔진 ejs, 많이사용하는 엔진,html과 비슷
//ejs모듈 다운로드해야함
app.set("views", "./views");
app.set("view engine", "ejs");

//use는 home폴더에있는 페이지들을 사용할수있게해줌
app.use("/", home); // use는 미들웨어를 등록해주는 메서드

module.exports = app; //밖에서 app쓸수있게 내보내줌
