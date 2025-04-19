import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true,

    },

    description:{
        type: String,
        required: true

    },

    project:{
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },

    assgnedTo:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    assignedBy:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    

}, {timestamps:true})

export const Task = mongoose.model("Task", taskSchema)