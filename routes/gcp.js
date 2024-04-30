var express = require('express');
var router = express.Router();

// Define your product objects
const village = [
    { name: 'Harapan Jaya', code: 'harja' },
    { name: 'Harapan Indah', code: 'harin' },
    { name: 'Harapan Mulia', code: 'harmu' }
];

/**
 * @swagger
 * tags:
 *   name: Village
 *   description: The Village managing API
 * /village:
 *  get:
 *      summary: Returns the list of all the villages
 *      tags: [Village]
 *      responses:
 *          200:
 *              description: The list of the villages
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/village'
 *          404:
 *              description: The list of the villages not found
 * components:
 *   schemas:
 *     village:
 *       type: object
 *       required:
 *       properties:
 *         name:
 *           type: string
 *           description: village name
 *         code:
 *           type: string
 *           description: village code
 *       example:
 *         name: harapan jaya
 *         code: harja
 */
router.get('/village', function(req, res) {
    res.json(village)
});

module.exports = router;