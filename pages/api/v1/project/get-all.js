import { getAll } from "../../lib/helper";
import Project from "../../models/Project";

const getAllProjects = getAll(Project);
export default getAllProjects;