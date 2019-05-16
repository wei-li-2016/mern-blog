const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

module.exports = app => {
  userRoutes(app);
  postRoutes(app);
  commentRoutes(app);
};
