//require mongoose
const mongoose = require("mongoose");

//save reference to the Schema constructor
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title : {
    type : String,
    required : true
  },
  publishDate : {
    type : String,
    required : true
  },
  url : {
    type : String,
    unique : true,
    required : true
  },
  savedDate : {
    type : String,
    default : Date()
  },
  // saved : {
  //   type : Boolean,
  //   default : false
  //   //required : true
  // },
  note : {
    type : Schema.Types.ObjectId,
    ref : "Note"
  }
});

//this creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

//export the Article model
module.exports = Article;


