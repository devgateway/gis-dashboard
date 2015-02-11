'use strict';
var keyMirror = require('/node_modules/react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  RECEIVE_ALL_DEPARTAMENTS: null,  //Recives list of all departaments from REST API
  RECEIVE_DATA: null    // Loads our mock data
});
