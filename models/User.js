import mongoose from "mongoose";
const { Schema, model} = mongoose;
const userSchema =  new Schema(
    {
        userName :{
            type: String,
            required: true            
        },
        email :{
            type: String,
            required: true            
        },
        password :{
            type: String,
            required: true            
        },
        image :{
            type: [String],
            required: true            
        },
        type :{
            type: String,
            required: true,            
            enum : ["Admin",]            
        },
        User_watch_FilmId :[{
            type: Schema.Types.ObjectId,
            ref: 'User_watch_Film',
            required: false
            }],
        roles :{
            type: [String],
            required: false            
        },
    },
    {
        timestamps: true
    }
);



export default model('User',userSchema);