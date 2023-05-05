// router.js
const express = require('express');
const router = express.Router();
const { getIP } = require('../controllers/ipController');

router.get('/', getIP);

module.exports = router;
