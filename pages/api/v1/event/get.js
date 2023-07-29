import { getOne } from "../../lib/helper"
import Event from "../../models/Event"


const getEvent = getOne(Event, 'projects')
export default getEvent