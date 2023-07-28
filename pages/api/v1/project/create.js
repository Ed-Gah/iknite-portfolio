import catchAsync from "../../lib/catchAsync";
import DB from "../../lib/db";
import Contributor from "../../models/Contributor";
import Project from "../../models/Project";

const createContributors = (contributors) => {
    return new Promise((resolve, reject) => {
        try {
            let contributorsId = [];
            contributors.forEach(async contributor => {
                const id = await Contributor.create(contributor)
                contributorsId.push(id._id)
                if (contributorsId.length === contributors.length) {
                    return resolve(contributorsId);
                }
            })


        } catch (error) {
            return reject(error);
        }
    })
}

const createProject = catchAsync(async (req, res, next) => {
    await DB();

    const { contributors, title, date, status, type, projectManager, coverImage, media } = req.body


    const contributorsId = await createContributors(contributors)

    console.log('contributors created: ', contributorsId)

    const project = {
        contributors: contributorsId,
        title,
        date,
        status,
        type,
        projectManager,
        coverImage,
        media,
    }

    const newProject = await Project.create(project)

    res.status(201).json({
        status: 'OK',
        data: newProject
    })
})

export default createProject;