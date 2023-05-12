import mongoose from "mongoose";
const { Schema, model} = mongoose;
const tournageSchema =  new Schema(
    {
        nom :{
            type: String,
            required: true            
        },
        dateDeDebut :{
            type: Date,
            required: true            
        },
        dateDeFin :{
            type: Date,
            required: true            
        },
        Filmid :{
            type: Schema.Types.ObjectId,
            ref: 'Film',
            required: false
        },
        SocieteDeProductionid :{
            type: Schema.Types.ObjectId,
            ref: 'SocieteDeProduction',
            required: false
        },
    },
    {
        timestamps: true
    }
);



export default model('Tournage',tournageSchema);