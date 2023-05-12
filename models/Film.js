import mongoose from "mongoose";
const { Schema, model} = mongoose;
const filmSchema =  new Schema(
    {
        typeDeTournage :{
            type: String,
            required: true            
        },
        titre :{
            type: String,
            required: true            
        },
        Tournages :[{
            type: Schema.Types.ObjectId,
            ref: 'Tournage',
            required: false
            }],
        
        User_watch_FilmId :[{
            type: Schema.Types.ObjectId,
            ref: 'User_watch_Film',
            required: false
            }],
    },
    {
        timestamps: true
    }
);



export default model('Film',filmSchema);