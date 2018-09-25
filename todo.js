var express = require('express');
var router = express.Router();

const f = require('util').format;

const user = encodeURIComponent('admin'); // username ใน database mongo ที่สร้าง
const password = encodeURIComponent('admin123456'); //
var dbName = "mobileparadigm" //

var MongoClient = require('mongodb').MongoClient;
// moogose
const dbUrl = f("mongodb://%s:%s@ds111913.mlab.com:11913/%s", user, password, dbName);//%sคือการbinding

var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res) { //เรียกการใช้ข้อมูลแบบ get
    MongoClient.connect(dbUrl, function(err, client) {
		const db = client.db(dbName).collection('todo').find({}).toArray(function (err, result) {
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send(result);
		});
	});
});

router.post('/', function (req, res) {
  MongoClient.connect(dbUrl, function(err, client) {
  const db = client.db(dbName).collection('todo').InsertOne(req.body,function (err, result) {
    client.close();
    if (err) res.send(err);
    res.status(200);
    res.send("insert success");
  });
  });
  });


router.delete('/', function (req, res) {

})

router.put('/', function (req, res) {

})

module.exports = router;
