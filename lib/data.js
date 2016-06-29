
exports.list = function (db, req, res) {
  var query = "SELECT * from datas";
  db.query(
    query,
    function (err, rows) {
      if (err) throw err;
      res.json({datas: rows, success: true});
    }
  );
}