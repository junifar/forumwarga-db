var express = require('express');
var router = express.Router();

// Define your product objects
const village = [
    { name: 'Harapan Jaya', code: 'harja' },
    { name: 'Harapan Indah', code: 'harin' },
    { name: 'Harapan Mulia', code: 'harmu' }
];

/* GET users listing. */
router.get('/village', function(req, res) {
    res.json(village)
});

module.exports = router;