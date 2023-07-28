import Event from "../../models/Event";
import { updateOne } from "../../lib/helper";

const updateEvent = updateOne(Event, [
    'title',
    'type',
    'projects',
])

export default updateEvent