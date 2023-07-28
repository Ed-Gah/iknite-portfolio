import { createOne } from "../../lib/helper";
import Event from "../../models/Event";

const createEvent = createOne(Event, [
    'title',
    'type',
    'projects',
    'date',
    'description'
])

export default createEvent