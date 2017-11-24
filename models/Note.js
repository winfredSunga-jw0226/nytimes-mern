const mongoose = require("mongoose");

//save a reference to the Schema constructor
const Schema = mongoose.Schema;

//using the schema constructor, create a new CommentSchema object
const NoteSchema = new Schema ({
  //title is of type String
  //title : String,
  //body is of type String
  text : {
    type : String
  },
  body : {
    type : String
  } 
});

//this creates our model from the above schema, using mongoose's model method 
const Note = mongoose.model("Note", NoteSchema);

//Export the Note model
module.exports = Note;