import { getAll } from "../../lib/helper";
import Contributor from "../../models/Contributor";

const getAllContributors = getAll(Contributor, 'member')

export default getAllContributors