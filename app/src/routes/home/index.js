"use strict";
//view를 관리하는 파일
const express = require("express");
//라우터 사용하려면 express.Router()
const router = express.Router();

const ctrl = require("./home.ctrl");

// home.ctrl.js에서 불러온 hello,again
router.get("/", ctrl.hello);
router.get("/login", ctrl.login);
//내보내기 해줘야 밖에서 사용가능
module.exports = router;
