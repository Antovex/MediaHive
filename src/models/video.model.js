// This will create a Video model in the DB.
import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, 
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User" //This will refer to the user model (Db)
        }

    }, 
    {
        timestamps: true //This will add createdAt and updatedAt
    }
)

videoSchema.plugin(mongooseAggregatePaginate) //This will allow us to use pagination

export const Video = mongoose.model("Video", videoSchema) //This will create a collection (DB) named video