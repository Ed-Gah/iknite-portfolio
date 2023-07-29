import { getOne } from "../../lib/helper"
import Event from "../../models/Event"


const getEvent = getOne(Event, [{
    path: 'projects',
    populate: [{
        path: 'projectManager',
        model: 'Member',
    }, {
        path: 'contributors',
        model: 'Contributor',
        populate: {
            path: 'member',
            model: 'Member'
        }
    }]
}])
export default getEvent