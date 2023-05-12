import mongoose from "mongoose";
const { Schema, model} = mongoose;
const societedeproductionSchema =  new Schema(
    {
        nom :{
            type: String,
            required: true            
        },
        Produitid :{
            type: Schema.Types.ObjectId,
            ref: 'Produit',
            required: false
        },
        Tournages :[{
            type: Schema.Types.ObjectId,
            ref: 'Tournage',
            required: false
            }],
        
    },
    {
        timestamps: true
    }
);



export default model('SocieteDeProduction',societedeproductionSchema);