import mongoose, { Schema } from "mongoose";
import {AvailableTaskStatuses, TaskStatusEnum} from "../utils/constants.js"

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

    status:{
        type: String,
        enum: AvailableTaskStatuses,
        default: TaskStatusEnum.TODO,

    },

    attachments:{
        // files store in obj storage; azure bucket, cloudnary, imagekit
        type: [
            {
                url: String,
                mimetype: String,
                size: Number
            }

        ],
        default: []

    }

    

}, {timestamps:true})

export const Task = mongoose.model("Task", taskSchema)