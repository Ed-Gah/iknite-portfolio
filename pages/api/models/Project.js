import { Schema, model, models } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const projectSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter a title for this Project'],
            unique: true,
        },
        date: Date,
        status: {
            type: String,
            default: 'ongoing',
            enum: ['featured', 'ongoing']
        },
        type: {
            type: String,
            required: [true, 'Please enter the type for this Project'],
            enum: ['production', 'final-project', 'sneak']
        },
        projectManager: {
            type: Schema.ObjectId,
            ref: "Member"
        },
        coverImage: String,
        media: [String],
        contributors: [{
            type: Schema.ObjectId,
            ref: 'Contributor'
        }],
        description: String,
    }, { timestamps: true }
)

projectSchema.plugin(uniqueValidator, {
    message: "{PATH} {VALUE} is already in use, please try another"
})

// projectSchema.pre(/^find/, function (next) {
//     this.populate('projectManager')
// })

export default models ? models.Project || model('Project', projectSchema) : model('Project', projectSchema)