import { createOne } from "../../lib/helper";
import Member from "../../models/Member";

const createMember = createOne(Member, [
    'name',
    'image',
    'department',
    'type',
    'email',
    'socialHandles'

])

export default createMember;