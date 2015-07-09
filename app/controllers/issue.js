var mongoose = require('mongoose'),
    Issue = mongoose.model('Issue'),
    ObjectId = mongoose.Types.ObjectId;

exports.create = function(req, res, next) {
  newIssue = new Issue(req.body);
  newIssue.save(function(err, issue) {
    if(err) {
      res.status(500);
      res.json({
        type: false,
        data: 'Error Occured: ' + err
      });
    } else {
      res.status(201);
      res.json({
        type: true,
        data: issue
      });
    }
  });
}

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

exports.viewById = function(req, res, next) {
  Issue.findById(new ObjectId(req.params.id), function(err, issue){
    if(err) {
      res.status(500);
      res.json({
        type: false,
        data: 'Error Occured: ' + err
      });
    } else {
      if(issue) {
        res.status(200);
        res.json({
          type: true,
          data: issue
        });
      } else {
        res.json({
          type: false,
          data: 'Issue: ' + req.params.id + ' not found'
        });
      }
    }
  });
}
