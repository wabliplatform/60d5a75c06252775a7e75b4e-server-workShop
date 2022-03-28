
const { ProjectProjectImageSchema } =require('./ProjectProjectImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


projectImage:  
ProjectProjectImageSchema
 , 


projectTitle:String , 


projectStartDate:String , 


projectWebsite:String , 


projectEndDate:String , 


projectDuration:String , 


projectGA:String , 


projectAbstract:String , 


projectDescription:String , 




 projectWp: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'workpackage'
  }

]



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

