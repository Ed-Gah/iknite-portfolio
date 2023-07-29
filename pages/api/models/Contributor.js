import { Schema, model, models } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const contributorSchema = new Schema(
    {
        member: {
            type: Schema.ObjectId,
            ref: 'Member'
        },
        role: {
            type: String,
            required: [true, 'Please select a role for this contributor'],
            enum: ['ui', 'ux', 'ui/ux', 'front-end', 'back-end', 'full-stack']
        },
    }, { timestamps: true }
)

contributorSchema.plugin(uniqueValidator, {
    message: "{PATH} {VALUE} is already in use, please try another"
})

// contributorSchema.pre(/^find/, function (next) {
//     this.populate({
//         path: 'member',
//     })
// })

export default models ? models.Contributor || model('Contributor', contributorSchema) : model('Contributor', contributorSchema)