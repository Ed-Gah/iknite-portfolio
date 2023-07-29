const { getOne } = require("../../lib/helper");
const { default: Contributor } = require("../../models/Contributor");

const getContributor = getOne(Contributor, ['member']);
export default getContributor;