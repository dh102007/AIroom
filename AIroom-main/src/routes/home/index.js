"use strict"

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

// ctrl 폴더에서 output이나 process 꺼내기
router.get('/', ctrl.output.home);

router.post('/list', ctrl.process.list)
router.post('/edit', ctrl.process.edit)
router.post('/image', ctrl.process.image)
router.post("/users", ctrl.process.users)
module.exports= router;