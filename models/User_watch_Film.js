import mongoose from "mongoose";
const { Schema, model} = mongoose;
const watchSchema =  new Schema(
    {
        Userid:{
            type: Schema.Types.ObjectId,
            required: true
        },
        Filmid:{
            type: Schema.Types.ObjectId,
            required: true
        },    },
    {
        timestamps: true
    }
);

export default model('watch',watchSchema);