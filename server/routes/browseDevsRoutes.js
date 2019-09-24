const express = require('express');
const browseDevsController = require('./../controllers/browseDevsController.js');
const router = express.Router();

router.get('/',browseDevsController.allUsers);