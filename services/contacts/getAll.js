const {Contact} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getAll = tryCatchWrapper(async ({id, skip, limit, favorite}) => {
  if (skip || limit) {
    const data = await Contact
        .find({owner: id}, '', {skip, limit: Number(limit)})
        .populate('owner', '_id username email');
    return data;
  }

  if (favorite) {
    const data = await Contact
        .find({favorite: favorite})
        .populate('owner', '_id username email');
    return data;
  }
});

module.exports = getAll;
