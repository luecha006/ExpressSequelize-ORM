var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get("/", (req, res) => {
//   const json = JSON.parse('{"test":"Hello World"}');
//   console.log("hello");
//   return res.status(200).json({
//     status: 200
//     , data: json
//   });
// });


module.exports = router;