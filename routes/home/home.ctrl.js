"use strict";
//기능을 수행하는 ctroller파일
// home에있는 페이지들을 사용할수있게해줌
const hello = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};
//render에 index파일을 연결해주고 파일형식은 위에서 ejs라고 해줘서 따로 안써도됨

module.exports = {
  hello,
  login,
};
