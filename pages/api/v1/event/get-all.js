import DB from "../../lib/db";
import { getAll } from "../../lib/helper";
import Event from "../../models/Event";
import Member from "../../models/Member";

const getAllEvents = getAll(Event);

export default getAllEvents;