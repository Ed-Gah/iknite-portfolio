import { getOne } from "../../lib/helper";
import Project from "../../models/Project";

const getProject = getOne(Project, [{
    path: 'contributors',
    populate: {
        path: 'member',
        model: 'Member'
    }
}, 'projectManager'])

export default getProject;