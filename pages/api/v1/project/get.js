import { getOne } from "../../lib/helper";
import Project from "../../models/Project";

const getProject = getOne(Project, 'projectManager')

export default getProject;