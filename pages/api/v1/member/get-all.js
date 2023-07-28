import { getAll } from "../../lib/helper";
import Member from "../../models/Member";

const getAllMembers = getAll(Member);

export default getAllMembers;