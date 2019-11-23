var express = require('express');
var router = express.Router();

const modRef = require('../controllers/refrisControllers')

/* GET home page. */
router.post('/', modRef.createRefri)
router.get('/', modRef.getRefri);
router.get('/', modRef.getRefris);
router.put("/", modRef.updateRefri);
router.delete("/", modRef.deleteRefris);

module.exports = router;
