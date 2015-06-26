var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IssueSchema = new Schema({
  issue: Object
});

mongoose.model('Issue', IssueSchema);
