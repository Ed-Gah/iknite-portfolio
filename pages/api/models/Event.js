import { Schema, model, models } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter a title for this event'],
            unique: true,
        },
        description: String,
        date: Date,
        type: {
            type: String,
            required: [true, 'Please enter the type for this event'],
            enum: ['hackathon', 'code-battle', 'workshop']
        },
        projects: [{
            type: Schema.ObjectId,
            ref: 'Project'
        }]
    }, { timestamps: true }
)

eventSchema.plugin(uniqueValidator, {
    message: "{PATH} {VALUE} is already in use, please try another"
})

// eventSchema.pre(/^find/, function (next) {
//     this.populate({
//         path: 'projects',
//     })
// })

export default models ? models.Event || model('Event', eventSchema) : model('Event', eventSchema)