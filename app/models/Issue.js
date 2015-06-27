var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IssueSchema = new Schema({});

// Collection name == issues
mongoose.model('Issue', IssueSchema);
