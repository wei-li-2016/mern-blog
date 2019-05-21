const express = require('express');
const path = require('path');

module.exports = app => {
  const staticFiles = express.static(
    path.join(__dirname, '../../../client/build')
  );

  app.get('/*', staticFiles);
};
