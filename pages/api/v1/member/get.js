import { getOne } from "../../lib/helper";
import Member from "../../models/Member";

const getMember = getOne(Member)

export default getMember;