//서버 실행해서 포트열어주는 파일

const app = require("../app");
const PORT = 7000;

app.listen(PORT, () => {
  console.log("서버 가동");
});
