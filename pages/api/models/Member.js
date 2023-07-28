import { Schema, model, models } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const memberSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter the name of this member'],
        },
        image: String,
        department: {
            type: String,
            enum: ['developer', 'designer']
        },
        type: {
            type: String,
            enum: ['intern', 'trainee', 'employee']
        },
        email: String,
        socialHandles: {
            github: String,
            linkedIn: String,
            youtube: String,
            dribbble: String,
            pintrest: String
        }
    }, { timestamps: true }
)

memberSchema.plugin(uniqueValidator, {
    message: "{PATH} {VALUE} is already in use, please try another"
})


export default models ? models.Member || model('Member', memberSchema) : model('Member', memberSchema)