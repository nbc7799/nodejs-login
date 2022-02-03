"use strict";
//view를 관리하는 파일
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);
//내보내기 해줘야 밖에서 사용가능
module.exports = router;
