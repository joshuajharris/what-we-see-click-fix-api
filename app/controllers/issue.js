var mongoose = require('mongoose'),
    Issue = mongoose.model('Issue');

exports.view = function(req, res, next) {
  Issue.find({}, function(err, issues) {
    if(err) {
      res.status(500);
      res.json({
        type: false,
        data: 'Error Occured: ' + err
      });
    } else {
      if(issues) {
        res.status(200);
        res.json({
          type: true,
          data: issues
        });
      } else {
        res.json({
          type: false,
          data: 'No Issues Found'
        });
      }
    }
  });
}
